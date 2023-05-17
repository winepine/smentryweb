import {
  DetectDocumentTextCommand,
  TextractClient,
} from "@aws-sdk/client-textract";
import { useEffect, useRef } from "react";
export default function Jaida() {
  const canvasRef = useRef(null);
  async function capture(predictions: any) {
    const video = document.getElementsByTagName("video")[0];
    var canvas = document.getElementById("canvas");
    const coords = predictions[0].bbox;
    canvasRef.current.width = video.videoWidth;
    canvasRef.current.height = video.videoHeight;
    canvasRef.current
      .getContext("2d")
      .drawImage(
        video,
        coords.x - coords.width / 2,
        coords.y - coords.height / 2,
        coords.width,
        coords.height,
        0,
        0,
        coords.width,
        coords.height
      );
    let dataURL = canvasRef.current.toDataURL();

    const responsez = await fetch(dataURL);
    const arrayBuffer = await responsez.arrayBuffer();
    const uint8Array = new Uint8Array(arrayBuffer);
    const client = new TextractClient({
      region: "eu-west-2",
      credentials: {
        accessKeyId: "AKIAVCSFGRTC46K3FJD3",
        secretAccessKey: "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",
      },
    });
    const input = {
      Document: {
        Bytes: uint8Array,
      },
    };
    const command = new DetectDocumentTextCommand(input);
    const response = await client.send(command);
    let strings = "";
    response.Blocks.forEach(block => {
      if (block.BlockType === "WORD") {
        strings += block.Text + " ";
      }
    });
    console.log({ Detections: strings });
  }
  useEffect(() => {
    const video = document.getElementsByTagName("video")[0];
    let model;
    var cameraMode = "environment"; // or "user"

    const startVideoStreamPromise = navigator.mediaDevices
      .getUserMedia({
        audio: false,
        video: {
          facingMode: cameraMode,
        },
      })
      .then(function (stream) {
        return new Promise(function (resolve) {
          video.srcObject = stream;
          video.onloadeddata = function () {
            video.play();
            resolve();
          };
        });
      });

    var publishable_key = "rf_UICG7FKrlPUYw8twGgQ9tkAM52B2";
    var toLoad = {
      model: "number-plate-detection-qydiz",
      version: 2,
    };

    const loadModelPromise = new Promise(function (resolve, reject) {
      window.roboflow
        .auth({
          publishable_key: publishable_key,
        })
        .load(toLoad)
        .then(function (m) {
          model = m;
          resolve();
        });
    });

    Promise.all([startVideoStreamPromise, loadModelPromise]).then(function () {
      document.querySelector("body").classList.remove("loading");
      //   resizeCanvas();
      detectFrame();
    });

    var canvas, ctx: any;
    const font = "16px sans-serif";

    function videoDimensions(video) {
      // Ratio of the video's intrisic dimensions
      var videoRatio = video.videoWidth / video.videoHeight;

      // The width and height of the video element
      var width = video.offsetWidth,
        height = video.offsetHeight;

      // The ratio of the element's width to its height
      var elementRatio = width / height;

      // If the video element is short and wide
      if (elementRatio > videoRatio) {
        width = height * videoRatio;
      } else {
        // It must be tall and thin, or exactly equal to the original ratio
        height = width / videoRatio;
      }

      return {
        width: width,
        height: height,
      };
    }

    const renderPredictions = function (predictions: any) {
      var dimensions = videoDimensions(video);

      var scale = 1;

      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      predictions.forEach(function (prediction: any) {
        const x = prediction.bbox.x;
        const y = prediction.bbox.y;

        const width = prediction.bbox.width;
        const height = prediction.bbox.height;
        console.log({ jaida: { x, y, width, height } });
        // Draw the bounding box.
        ctx.strokeStyle = prediction.color;
        ctx.lineWidth = 4;
        ctx.strokeRect(
          (x - width / 2) / scale,
          (y - height / 2) / scale,
          width / scale,
          height / scale
        );

        // Draw the label background.
        ctx.fillStyle = prediction.color;
        const textWidth = ctx.measureText(prediction.class).width;
        const textHeight = parseInt(font, 10); // base 10
        ctx.fillRect(
          (x - width / 2) / scale,
          (y - height / 2) / scale,
          textWidth + 8,
          textHeight + 4
        );
      });

      predictions.forEach(function (prediction: any) {
        const x = prediction.bbox.x;
        const y = prediction.bbox.y;

        const width = prediction.bbox.width;
        const height = prediction.bbox.height;

        // Draw the text last to ensure it's on top.
        ctx.font = font;
        ctx.textBaseline = "top";
        ctx.fillStyle = "#000000";
        ctx.fillText(
          prediction.class,
          (x - width / 2) / scale + 4,
          (y - height / 2) / scale + 1
        );
      });
    };

    var prevTime;
    var pastFrameTimes = [];
    let readyVar = true;
    const detectFrame = function () {
      if (!model) return requestAnimationFrame(detectFrame);

      model
        .detect(video)
        .then(function (predictions: Array<any>) {
          if (predictions.length) {
            // console.log({ predictions });
            if (readyVar) {
              capture(predictions);
              setTimeout(() => {
                readyVar = true;
              }, 500);
            }
            readyVar = false;
          } else {
          }
          requestAnimationFrame(detectFrame);
          // renderPredictions(predictions);

          if (prevTime) {
            pastFrameTimes.push(Date.now() - prevTime);
            if (pastFrameTimes.length > 30) pastFrameTimes.shift();

            var total = 0;
            _.each(pastFrameTimes, function (t) {
              total += t / 1000;
            });

            var fps = pastFrameTimes.length / total;
            // $("#fps").text(Math.round(fps));
          }
          prevTime = Date.now();
        })
        .catch(function (e) {
          console.log("CAUGHT", e);
          requestAnimationFrame(detectFrame);
        });
    };
  }, []);
  return (
    <>
      <div>
        <body className="loading">
          <video id="video" autoPlay muted playsInline></video>
          <div id="fps"></div>
          <canvas ref={canvasRef} id="canvas"></canvas>
        </body>
      </div>
    </>
  );
}
