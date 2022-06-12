import React, { useState, useRef } from "react";
import Scanner from "./Scanner";
import { Result } from "./Result";
import { Button } from "@mui/material";
import { useEffect } from "react";

export const Manager = () => {
  const [scanning, setScanning] = useState(false);
  const [results, setResults] = useState([]);
  const scannerRef = useRef(null);

  useEffect(() => {
    if (results) {
      console.log(results);
    }
  }, [results]);

  return (
    <div>
      <div className="mb-4">
        <Button
          variant="contained"
          color="error"
          onClick={() => setScanning(!scanning)}
        >
          {scanning ? "Stop" : "Start"}
        </Button>
      </div>
      <ul className="results">
        {results.map(
          (result) =>
            result.codeResult && (
              <Result key={result.codeResult.code} result={result} />
            )
        )}
      </ul>
      <div
        ref={scannerRef}
        style={{ position: "relative", border: "0px solid red" }}
      >
        {/* <video style={{ width: window.innerWidth, height: 480, border: '3px solid orange' }}/> */}
        <canvas
          className="drawingBuffer"
          style={{
            position: "absolute",
            top: "0px",
            // left: '0px',
            // height: '100%',
            // width: '100%',
            border: "0px solid green",
          }}
          width="400"
          height="380"
        />
        {scanning ? (
          <Scanner
            scannerRef={scannerRef}
            onDetected={(result) => setResults([...results, result])}
          />
        ) : null}
      </div>
    </div>
  );
};
