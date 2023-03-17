import React from "react";
import AppBar from "../components/AppBar";
import ROSLIB from "roslib";
import { useState, useEffect } from "react";
import DropdownT from "../components/DropdownT";

function SequencerTest() {
  const [robotState, setRobotState] = useState({ data: "Stop" });

  const [sequence, setSequence] = useState([
    {
      head_pan: 0.0,
      head_tilt: 0.0,
      l_ank_p: 0.0,
      l_ank_r: 0.0,
      l_hip_p: 0.0,
      l_hip_r: 0.0,
      l_hip_y: 0.0,
      l_knee: 0.0,
      l_sho_p: 0.0,
      l_sho_r: 0.0,
      l_el: 0.0,
      r_ank_p: 0.0,
      r_ank_r: 0.0,
      r_hip_p: 0.0,
      r_hip_r: 0.0,
      r_hip_y: 0.0,
      r_knee: 0.0,
      r_sho_p: 0.0,
      r_sho_r: 0.0,
      r_el: 0.0,
      target_time: 0.0,
      pause_time: 0.0,
    },
    {
      head_pan: 0.0,
      head_tilt: 0.0,
      l_ank_p: 0.0,
      l_ank_r: 0.0,
      l_hip_p: 0.0,
      l_hip_r: 0.0,
      l_hip_y: 0.0,
      l_knee: 0.0,
      l_sho_p: 0.0,
      l_sho_r: 0.0,
      l_el: 0.0,
      r_ank_p: 0.0,
      r_ank_r: 0.0,
      r_hip_p: 0.0,
      r_hip_r: 0.0,
      r_hip_y: 0.0,
      r_knee: 0.0,
      r_sho_p: 0.0,
      r_sho_r: 0.0,
      r_el: 0.0,
      target_time: 0.0,
      pause_time: 0.0,
    },
    {
      head_pan: 0.0,
      head_tilt: 0.0,
      l_ank_p: 0.0,
      l_ank_r: 0.0,
      l_hip_p: 0.0,
      l_hip_r: 0.0,
      l_hip_y: 0.0,
      l_knee: 0.0,
      l_sho_p: 0.0,
      l_sho_r: 0.0,
      l_el: 0.0,
      r_ank_p: 0.0,
      r_ank_r: 0.0,
      r_hip_p: 0.0,
      r_hip_r: 0.0,
      r_hip_y: 0.0,
      r_knee: 0.0,
      r_sho_p: 0.0,
      r_sho_r: 0.0,
      r_el: 0.0,
      target_time: 0.0,
      pause_time: 0.0,
    },
    {
      head_pan: 0.0,
      head_tilt: 0.0,
      l_ank_p: 0.0,
      l_ank_r: 0.0,
      l_hip_p: 0.0,
      l_hip_r: 0.0,
      l_hip_y: 0.0,
      l_knee: 0.0,
      l_sho_p: 0.0,
      l_sho_r: 0.0,
      l_el: 0.0,
      r_ank_p: 0.0,
      r_ank_r: 0.0,
      r_hip_p: 0.0,
      r_hip_r: 0.0,
      r_hip_y: 0.0,
      r_knee: 0.0,
      r_sho_p: 0.0,
      r_sho_r: 0.0,
      r_el: 0.0,
      target_time: 0.0,
      pause_time: 0.0,
    },
    {
      head_pan: 0.0,
      head_tilt: 0.0,
      l_ank_p: 0.0,
      l_ank_r: 0.0,
      l_hip_p: 0.0,
      l_hip_r: 0.0,
      l_hip_y: 0.0,
      l_knee: 0.0,
      l_sho_p: 0.0,
      l_sho_r: 0.0,
      l_el: 0.0,
      r_ank_p: 0.0,
      r_ank_r: 0.0,
      r_hip_p: 0.0,
      r_hip_r: 0.0,
      r_hip_y: 0.0,
      r_knee: 0.0,
      r_sho_p: 0.0,
      r_sho_r: 0.0,
      r_el: 0.0,
      target_time: 0.0,
      pause_time: 0.0,
    },
    {
      head_pan: 0.0,
      head_tilt: 0.0,
      l_ank_p: 0.0,
      l_ank_r: 0.0,
      l_hip_p: 0.0,
      l_hip_r: 0.0,
      l_hip_y: 0.0,
      l_knee: 0.0,
      l_sho_p: 0.0,
      l_sho_r: 0.0,
      l_el: 0.0,
      r_ank_p: 0.0,
      r_ank_r: 0.0,
      r_hip_p: 0.0,
      r_hip_r: 0.0,
      r_hip_y: 0.0,
      r_knee: 0.0,
      r_sho_p: 0.0,
      r_sho_r: 0.0,
      r_el: 0.0,
      target_time: 0.0,
      pause_time: 0.0,
    },
    {
      head_pan: 0.0,
      head_tilt: 0.0,
      l_ank_p: 0.0,
      l_ank_r: 0.0,
      l_hip_p: 0.0,
      l_hip_r: 0.0,
      l_hip_y: 0.0,
      l_knee: 0.0,
      l_sho_p: 0.0,
      l_sho_r: 0.0,
      l_el: 0.0,
      r_ank_p: 0.0,
      r_ank_r: 0.0,
      r_hip_p: 0.0,
      r_hip_r: 0.0,
      r_hip_y: 0.0,
      r_knee: 0.0,
      r_sho_p: 0.0,
      r_sho_r: 0.0,
      r_el: 0.0,
      target_time: 0.0,
      pause_time: 0.0,
    },
    {
      head_pan: 0.0,
      head_tilt: 0.0,
      l_ank_p: 0.0,
      l_ank_r: 0.0,
      l_hip_p: 0.0,
      l_hip_r: 0.0,
      l_hip_y: 0.0,
      l_knee: 0.0,
      l_sho_p: 0.0,
      l_sho_r: 0.0,
      l_el: 0.0,
      r_ank_p: 0.0,
      r_ank_r: 0.0,
      r_hip_p: 0.0,
      r_hip_r: 0.0,
      r_hip_y: 0.0,
      r_knee: 0.0,
      r_sho_p: 0.0,
      r_sho_r: 0.0,
      r_el: 0.0,
      target_time: 0.0,
      pause_time: 0.0,
    },
    {
      head_pan: 0.0,
      head_tilt: 0.0,
      l_ank_p: 0.0,
      l_ank_r: 0.0,
      l_hip_p: 0.0,
      l_hip_r: 0.0,
      l_hip_y: 0.0,
      l_knee: 0.0,
      l_sho_p: 0.0,
      l_sho_r: 0.0,
      l_el: 0.0,
      r_ank_p: 0.0,
      r_ank_r: 0.0,
      r_hip_p: 0.0,
      r_hip_r: 0.0,
      r_hip_y: 0.0,
      r_knee: 0.0,
      r_sho_p: 0.0,
      r_sho_r: 0.0,
      r_el: 0.0,
      target_time: 0.0,
      pause_time: 0.0,
    },
    {
      head_pan: 0.0,
      head_tilt: 0.0,
      l_ank_p: 0.0,
      l_ank_r: 0.0,
      l_hip_p: 0.0,
      l_hip_r: 0.0,
      l_hip_y: 0.0,
      l_knee: 0.0,
      l_sho_p: 0.0,
      l_sho_r: 0.0,
      l_el: 0.0,
      r_ank_p: 0.0,
      r_ank_r: 0.0,
      r_hip_p: 0.0,
      r_hip_r: 0.0,
      r_hip_y: 0.0,
      r_knee: 0.0,
      r_sho_p: 0.0,
      r_sho_r: 0.0,
      r_el: 0.0,
      target_time: 0.0,
      pause_time: 0.0,
    },
  ]);

  const [sequenceNumb, setSequenceNumb] = useState(0);

  var sequencer = new ROSLIB.Message([
    {
      head_pan: parseFloat(sequence[sequenceNumb]["head_pan"]),
      head_tilt: parseFloat(sequence[sequenceNumb]["head_tilt"]),
      l_ank_p: parseFloat(sequence[sequenceNumb]["l_ank_p"]),
      l_ank_r: parseFloat(sequence[sequenceNumb]["l_ank_r"]),
      l_hip_p: parseFloat(sequence[sequenceNumb]["l_hip_p"]),
      l_hip_r: parseFloat(sequence[sequenceNumb]["l_hip_r"]),
      l_hip_y: parseFloat(sequence[sequenceNumb]["l_hip_y"]),
      l_knee: parseFloat(sequence[sequenceNumb]["l_knee"]),
      l_sho_p: parseFloat(sequence[sequenceNumb]["l_sho_p"]),
      l_sho_r: parseFloat(sequence[sequenceNumb]["l_sho_r"]),
      l_el: parseFloat(sequence[sequenceNumb]["l_el"]),
      r_ank_p: parseFloat(sequence[sequenceNumb]["r_ank_p"]),
      r_ank_r: parseFloat(sequence[sequenceNumb]["r_ank_r"]),
      r_hip_p: parseFloat(sequence[sequenceNumb]["r_hip_p"]),
      r_hip_r: parseFloat(sequence[sequenceNumb]["r_hip_r"]),
      r_hip_y: parseFloat(sequence[sequenceNumb]["r_hip_y"]),
      r_knee: parseFloat(sequence[sequenceNumb]["r_knee"]),
      r_sho_p: parseFloat(sequence[sequenceNumb]["r_sho_p"]),
      r_sho_r: parseFloat(sequence[sequenceNumb]["r_sho_r"]),
      r_el: parseFloat(sequence[sequenceNumb]["r_el"]),
      target_time: parseFloat(sequence[sequenceNumb]["target_time"]),
    },
  ]);

  const joints = [
    "head_pan",
    "head_tilt",
    "l_ank_p",
    "l_ank_r",
    "l_hip_p",
    "l_hip_r",
    "l_hip_y",
    "l_knee",
    "l_sho_p",
    "l_sho_r",
    "l_el",
    "r_ank_p",
    "r_ank_r",
    "r_hip_p",
    "r_hip_r",
    "r_hip_y",
    "r_knee",
    "r_sho_p",
    "r_sho_r",
    "r_el",
    "target_time",
  ];

  // console.log("value is:", sequence);

  var ros = new ROSLIB.Ros({
    url: "ws://localhost:6969",
  });

  useEffect(() => {});

  ros.on("connection", function () {
    console.log("Connected to websocket server.");
  });

  ros.on("error", function (error) {
    console.log("Error connecting to websocket server: ", error);
  });

  ros.on("close", function () {
    console.log("Connection to websocket server closed.");
  });

  var seqTorque = new ROSLIB.Topic({
    ros: ros,
    name: "/Sequencer/Torque",
    messageType: "alfarobi_web_gui/SequencerTorque",
  });

  var seqArr = new ROSLIB.Topic({
    ros: ros,
    name: "/SequenceArr",
    messageType: "alfarobi_web_gui/SequencerArr",
  });

  var instruction = new ROSLIB.Topic({
    ros: ros,
    name: "/RobotState",
    messageType: "std_msgs/String",
  });

  var sequencerTourque = new ROSLIB.Message({});

  var sequencerArr = new ROSLIB.Message({
    SEQUENCE_NAME: "NGACENG",
    SEQUENCE: [
      {
        head_pan: parseFloat(sequence[0]["head_pan"]),
        head_tilt: parseFloat(sequence[0]["head_tilt"]),
        l_ank_p: parseFloat(sequence[0]["l_ank_p"]),
        l_ank_r: parseFloat(sequence[0]["l_ank_r"]),
        l_hip_p: parseFloat(sequence[0]["l_hip_p"]),
        l_hip_r: parseFloat(sequence[0]["l_hip_r"]),
        l_hip_y: parseFloat(sequence[0]["l_hip_y"]),
        l_knee: parseFloat(sequence[0]["l_knee"]),
        l_sho_p: parseFloat(sequence[0]["l_sho_p"]),
        l_sho_r: parseFloat(sequence[0]["l_sho_r"]),
        l_el: parseFloat(sequence[0]["l_el"]),
        r_ank_p: parseFloat(sequence[0]["r_ank_p"]),
        r_ank_r: parseFloat(sequence[0]["r_ank_r"]),
        r_hip_p: parseFloat(sequence[0]["r_hip_p"]),
        r_hip_r: parseFloat(sequence[0]["r_hip_r"]),
        r_hip_y: parseFloat(sequence[0]["r_hip_y"]),
        r_knee: parseFloat(sequence[0]["r_knee"]),
        r_sho_p: parseFloat(sequence[0]["r_sho_p"]),
        r_sho_r: parseFloat(sequence[0]["r_sho_r"]),
        r_el: parseFloat(sequence[0]["r_el"]),
        target_time: parseFloat(sequence[0]["target_time"]),
      },
      {
        head_pan: parseFloat(sequence[1]["head_pan"]),
        head_tilt: parseFloat(sequence[1]["head_tilt"]),
        l_ank_p: parseFloat(sequence[1]["l_ank_p"]),
        l_ank_r: parseFloat(sequence[1]["l_ank_r"]),
        l_hip_p: parseFloat(sequence[1]["l_hip_p"]),
        l_hip_r: parseFloat(sequence[1]["l_hip_r"]),
        l_hip_y: parseFloat(sequence[1]["l_hip_y"]),
        l_knee: parseFloat(sequence[1]["l_knee"]),
        l_sho_p: parseFloat(sequence[1]["l_sho_p"]),
        l_sho_r: parseFloat(sequence[1]["l_sho_r"]),
        l_el: parseFloat(sequence[1]["l_el"]),
        r_ank_p: parseFloat(sequence[1]["r_ank_p"]),
        r_ank_r: parseFloat(sequence[1]["r_ank_r"]),
        r_hip_p: parseFloat(sequence[1]["r_hip_p"]),
        r_hip_r: parseFloat(sequence[1]["r_hip_r"]),
        r_hip_y: parseFloat(sequence[1]["r_hip_y"]),
        r_knee: parseFloat(sequence[1]["r_knee"]),
        r_sho_p: parseFloat(sequence[1]["r_sho_p"]),
        r_sho_r: parseFloat(sequence[1]["r_sho_r"]),
        r_el: parseFloat(sequence[1]["r_el"]),
        target_time: parseFloat(sequence[1]["target_time"]),
      },
      {
        head_pan: parseFloat(sequence[2]["head_pan"]),
        head_tilt: parseFloat(sequence[2]["head_tilt"]),
        l_ank_p: parseFloat(sequence[2]["l_ank_p"]),
        l_ank_r: parseFloat(sequence[2]["l_ank_r"]),
        l_hip_p: parseFloat(sequence[2]["l_hip_p"]),
        l_hip_r: parseFloat(sequence[2]["l_hip_r"]),
        l_hip_y: parseFloat(sequence[2]["l_hip_y"]),
        l_knee: parseFloat(sequence[2]["l_knee"]),
        l_sho_p: parseFloat(sequence[2]["l_sho_p"]),
        l_sho_r: parseFloat(sequence[2]["l_sho_r"]),
        l_el: parseFloat(sequence[2]["l_el"]),
        r_ank_p: parseFloat(sequence[2]["r_ank_p"]),
        r_ank_r: parseFloat(sequence[2]["r_ank_r"]),
        r_hip_p: parseFloat(sequence[2]["r_hip_p"]),
        r_hip_r: parseFloat(sequence[2]["r_hip_r"]),
        r_hip_y: parseFloat(sequence[2]["r_hip_y"]),
        r_knee: parseFloat(sequence[2]["r_knee"]),
        r_sho_p: parseFloat(sequence[2]["r_sho_p"]),
        r_sho_r: parseFloat(sequence[2]["r_sho_r"]),
        r_el: parseFloat(sequence[2]["r_el"]),
        target_time: parseFloat(sequence[2]["target_time"]),
      },
      {
        head_pan: parseFloat(sequence[3]["head_pan"]),
        head_tilt: parseFloat(sequence[3]["head_tilt"]),
        l_ank_p: parseFloat(sequence[3]["l_ank_p"]),
        l_ank_r: parseFloat(sequence[3]["l_ank_r"]),
        l_hip_p: parseFloat(sequence[3]["l_hip_p"]),
        l_hip_r: parseFloat(sequence[3]["l_hip_r"]),
        l_hip_y: parseFloat(sequence[3]["l_hip_y"]),
        l_knee: parseFloat(sequence[3]["l_knee"]),
        l_sho_p: parseFloat(sequence[3]["l_sho_p"]),
        l_sho_r: parseFloat(sequence[3]["l_sho_r"]),
        l_el: parseFloat(sequence[3]["l_el"]),
        r_ank_p: parseFloat(sequence[3]["r_ank_p"]),
        r_ank_r: parseFloat(sequence[3]["r_ank_r"]),
        r_hip_p: parseFloat(sequence[3]["r_hip_p"]),
        r_hip_r: parseFloat(sequence[3]["r_hip_r"]),
        r_hip_y: parseFloat(sequence[3]["r_hip_y"]),
        r_knee: parseFloat(sequence[3]["r_knee"]),
        r_sho_p: parseFloat(sequence[3]["r_sho_p"]),
        r_sho_r: parseFloat(sequence[3]["r_sho_r"]),
        r_el: parseFloat(sequence[3]["r_el"]),
        target_time: parseFloat(sequence[3]["target_time"]),
      },
      {
        head_pan: parseFloat(sequence[4]["head_pan"]),
        head_tilt: parseFloat(sequence[4]["head_tilt"]),
        l_ank_p: parseFloat(sequence[4]["l_ank_p"]),
        l_ank_r: parseFloat(sequence[4]["l_ank_r"]),
        l_hip_p: parseFloat(sequence[4]["l_hip_p"]),
        l_hip_r: parseFloat(sequence[4]["l_hip_r"]),
        l_hip_y: parseFloat(sequence[4]["l_hip_y"]),
        l_knee: parseFloat(sequence[4]["l_knee"]),
        l_sho_p: parseFloat(sequence[4]["l_sho_p"]),
        l_sho_r: parseFloat(sequence[4]["l_sho_r"]),
        l_el: parseFloat(sequence[4]["l_el"]),
        r_ank_p: parseFloat(sequence[4]["r_ank_p"]),
        r_ank_r: parseFloat(sequence[4]["r_ank_r"]),
        r_hip_p: parseFloat(sequence[4]["r_hip_p"]),
        r_hip_r: parseFloat(sequence[4]["r_hip_r"]),
        r_hip_y: parseFloat(sequence[4]["r_hip_y"]),
        r_knee: parseFloat(sequence[4]["r_knee"]),
        r_sho_p: parseFloat(sequence[4]["r_sho_p"]),
        r_sho_r: parseFloat(sequence[4]["r_sho_r"]),
        r_el: parseFloat(sequence[4]["r_el"]),
        target_time: parseFloat(sequence[4]["target_time"]),
      },
      {
        head_pan: parseFloat(sequence[5]["head_pan"]),
        head_tilt: parseFloat(sequence[5]["head_tilt"]),
        l_ank_p: parseFloat(sequence[5]["l_ank_p"]),
        l_ank_r: parseFloat(sequence[5]["l_ank_r"]),
        l_hip_p: parseFloat(sequence[5]["l_hip_p"]),
        l_hip_r: parseFloat(sequence[5]["l_hip_r"]),
        l_hip_y: parseFloat(sequence[5]["l_hip_y"]),
        l_knee: parseFloat(sequence[5]["l_knee"]),
        l_sho_p: parseFloat(sequence[5]["l_sho_p"]),
        l_sho_r: parseFloat(sequence[5]["l_sho_r"]),
        l_el: parseFloat(sequence[5]["l_el"]),
        r_ank_p: parseFloat(sequence[5]["r_ank_p"]),
        r_ank_r: parseFloat(sequence[5]["r_ank_r"]),
        r_hip_p: parseFloat(sequence[5]["r_hip_p"]),
        r_hip_r: parseFloat(sequence[5]["r_hip_r"]),
        r_hip_y: parseFloat(sequence[5]["r_hip_y"]),
        r_knee: parseFloat(sequence[5]["r_knee"]),
        r_sho_p: parseFloat(sequence[5]["r_sho_p"]),
        r_sho_r: parseFloat(sequence[5]["r_sho_r"]),
        r_el: parseFloat(sequence[5]["r_el"]),
        target_time: parseFloat(sequence[5]["target_time"]),
      },
      {
        head_pan: parseFloat(sequence[6]["head_pan"]),
        head_tilt: parseFloat(sequence[6]["head_tilt"]),
        l_ank_p: parseFloat(sequence[6]["l_ank_p"]),
        l_ank_r: parseFloat(sequence[6]["l_ank_r"]),
        l_hip_p: parseFloat(sequence[6]["l_hip_p"]),
        l_hip_r: parseFloat(sequence[6]["l_hip_r"]),
        l_hip_y: parseFloat(sequence[6]["l_hip_y"]),
        l_knee: parseFloat(sequence[6]["l_knee"]),
        l_sho_p: parseFloat(sequence[6]["l_sho_p"]),
        l_sho_r: parseFloat(sequence[6]["l_sho_r"]),
        l_el: parseFloat(sequence[6]["l_el"]),
        r_ank_p: parseFloat(sequence[6]["r_ank_p"]),
        r_ank_r: parseFloat(sequence[6]["r_ank_r"]),
        r_hip_p: parseFloat(sequence[6]["r_hip_p"]),
        r_hip_r: parseFloat(sequence[6]["r_hip_r"]),
        r_hip_y: parseFloat(sequence[6]["r_hip_y"]),
        r_knee: parseFloat(sequence[6]["r_knee"]),
        r_sho_p: parseFloat(sequence[6]["r_sho_p"]),
        r_sho_r: parseFloat(sequence[6]["r_sho_r"]),
        r_el: parseFloat(sequence[6]["r_el"]),
        target_time: parseFloat(sequence[6]["target_time"]),
      },
      {
        head_pan: parseFloat(sequence[7]["head_pan"]),
        head_tilt: parseFloat(sequence[7]["head_tilt"]),
        l_ank_p: parseFloat(sequence[7]["l_ank_p"]),
        l_ank_r: parseFloat(sequence[7]["l_ank_r"]),
        l_hip_p: parseFloat(sequence[7]["l_hip_p"]),
        l_hip_r: parseFloat(sequence[7]["l_hip_r"]),
        l_hip_y: parseFloat(sequence[7]["l_hip_y"]),
        l_knee: parseFloat(sequence[7]["l_knee"]),
        l_sho_p: parseFloat(sequence[7]["l_sho_p"]),
        l_sho_r: parseFloat(sequence[7]["l_sho_r"]),
        l_el: parseFloat(sequence[7]["l_el"]),
        r_ank_p: parseFloat(sequence[7]["r_ank_p"]),
        r_ank_r: parseFloat(sequence[7]["r_ank_r"]),
        r_hip_p: parseFloat(sequence[7]["r_hip_p"]),
        r_hip_r: parseFloat(sequence[7]["r_hip_r"]),
        r_hip_y: parseFloat(sequence[7]["r_hip_y"]),
        r_knee: parseFloat(sequence[7]["r_knee"]),
        r_sho_p: parseFloat(sequence[7]["r_sho_p"]),
        r_sho_r: parseFloat(sequence[7]["r_sho_r"]),
        r_el: parseFloat(sequence[7]["r_el"]),
        target_time: parseFloat(sequence[7]["target_time"]),
      },
      {
        head_pan: parseFloat(sequence[8]["head_pan"]),
        head_tilt: parseFloat(sequence[8]["head_tilt"]),
        l_ank_p: parseFloat(sequence[8]["l_ank_p"]),
        l_ank_r: parseFloat(sequence[8]["l_ank_r"]),
        l_hip_p: parseFloat(sequence[8]["l_hip_p"]),
        l_hip_r: parseFloat(sequence[8]["l_hip_r"]),
        l_hip_y: parseFloat(sequence[8]["l_hip_y"]),
        l_knee: parseFloat(sequence[8]["l_knee"]),
        l_sho_p: parseFloat(sequence[8]["l_sho_p"]),
        l_sho_r: parseFloat(sequence[8]["l_sho_r"]),
        l_el: parseFloat(sequence[8]["l_el"]),
        r_ank_p: parseFloat(sequence[8]["r_ank_p"]),
        r_ank_r: parseFloat(sequence[8]["r_ank_r"]),
        r_hip_p: parseFloat(sequence[8]["r_hip_p"]),
        r_hip_r: parseFloat(sequence[8]["r_hip_r"]),
        r_hip_y: parseFloat(sequence[8]["r_hip_y"]),
        r_knee: parseFloat(sequence[8]["r_knee"]),
        r_sho_p: parseFloat(sequence[8]["r_sho_p"]),
        r_sho_r: parseFloat(sequence[8]["r_sho_r"]),
        r_el: parseFloat(sequence[8]["r_el"]),
        target_time: parseFloat(sequence[8]["target_time"]),
      },
      {
        head_pan: parseFloat(sequence[9]["head_pan"]),
        head_tilt: parseFloat(sequence[9]["head_tilt"]),
        l_ank_p: parseFloat(sequence[9]["l_ank_p"]),
        l_ank_r: parseFloat(sequence[9]["l_ank_r"]),
        l_hip_p: parseFloat(sequence[9]["l_hip_p"]),
        l_hip_r: parseFloat(sequence[9]["l_hip_r"]),
        l_hip_y: parseFloat(sequence[9]["l_hip_y"]),
        l_knee: parseFloat(sequence[9]["l_knee"]),
        l_sho_p: parseFloat(sequence[9]["l_sho_p"]),
        l_sho_r: parseFloat(sequence[9]["l_sho_r"]),
        l_el: parseFloat(sequence[9]["l_el"]),
        r_ank_p: parseFloat(sequence[9]["r_ank_p"]),
        r_ank_r: parseFloat(sequence[9]["r_ank_r"]),
        r_hip_p: parseFloat(sequence[9]["r_hip_p"]),
        r_hip_r: parseFloat(sequence[9]["r_hip_r"]),
        r_hip_y: parseFloat(sequence[9]["r_hip_y"]),
        r_knee: parseFloat(sequence[9]["r_knee"]),
        r_sho_p: parseFloat(sequence[9]["r_sho_p"]),
        r_sho_r: parseFloat(sequence[9]["r_sho_r"]),
        r_el: parseFloat(sequence[9]["r_el"]),
        target_time: parseFloat(sequence[9]["target_time"]),
      },
    ],
  });

  var instructionData = new ROSLIB.Message({
    data: String(robotState.data),
  });

  var seqListener = new ROSLIB.Topic({
    ros: ros,
    name: "/Sequence",
    messageType: "alfarobi_web_gui/Sequencer",
  });

  seqListener.subscribe(function (message) {
    // console.log("Received message " + seqListener.name + ": " + message);
  });

  var seqArrListener = new ROSLIB.Topic({
    ros: ros,
    name: "/SequenceArr",
    messageType: "alfarobi_web_gui/SequencerArr",
  });

  seqArrListener.subscribe(function (message) {
    console.log(
      "DAPET BOS " + seqArrListener.name + ": " + message.SEQUENCE_NAME
    );
  });

  return (
    <div className="flex flex-col h-screen bg-secondary_bg">
      <AppBar />
      <DropdownT color={"white"} ros={ros} />
      <div className="flex flex-row">
        <form className="bg-primary_bg mt-5 mb-1 p-2 rounded-lg">
          {joints.map((data) => (
            <div className="flex flex-row bg-secondary_bg mx-1 py-0.5  mt-1 rounded">
              <div className="flex flex-row items-center text-center">
                <p className="w-[7vw] text-[12px]">{data}</p>
                <input
                  type="number"
                  step="0.01"
                  className="w-[6vw] h-[2vh] ml-[1.8vw]"
                  value={sequence[sequenceNumb][`${data}`]}
                  onChange={(event) => {
                    const nextSeq = {
                      ...sequence,
                      [sequenceNumb]: {
                        ...sequence[sequenceNumb],
                        [`${data}`]: parseFloat(event.target.value),
                      },
                    };
                    console.log(nextSeq);
                    setSequence(nextSeq);
                  }}
                />
              </div>
            </div>
          ))}
        </form>
      </div>
      <div className="flex flex-row">
        {/* <button
          className="mt-4 mb-12 mx-4 p-2 px-10 bg-[#04C3FF] hover:bg-black text-black hover:text-[#B0ECFF] rounded-xl hover:cursor-pointer"
          onClick={() => {
            var myArr = new Array(10);
            for (let i = 0; i < 10; i++) {
              myArr.push(sequence[i]);
            }
            sequencerArr.SEQUENCE = myArr;
          }}
        >
          Save Sequence
        </button> */}
        <button
          className="mt-4 mb-12 mx-4 p-2 px-10 bg-[#59E867] hover:bg-black text-black hover:text-[#B0ECFF] rounded-xl hover:cursor-pointer"
          onClick={() => {
            // sequencerArr.SEQUENCE_NAME = sequenceArr.SEQUENCE_NAME;
            // sequencerArr.SEQUENCE = sequencer;

            // seq.publish(sequencer);
            console.log(sequencerArr);
            seqArr.publish(sequencerArr);
          }}
          type="submit"
        >
          Send
        </button>
        <button
          className="mt-4 mb-12 mx-4 p-2 px-10 bg-[#04C3FF] hover:bg-black text-black hover:text-[#B0ECFF] rounded-xl hover:cursor-pointer"
          onClick={() => {
            robotState.data == "Stop"
              ? setRobotState({ data: "Play" })
              : setRobotState({ data: "Stop" });
            instruction.publish(instructionData);
          }}
        >
          {robotState.data == "Stop" ? "Play" : "Stop"}
        </button>
        <button
          className="mt-4 mb-12 mx-4 p-2 px-10 bg-[#59E867] hover:bg-black text-black hover:text-[#B0ECFF] rounded-xl hover:cursor-pointer"
          onClick={() => {
            setSequenceNumb(
              sequenceNumb + 1 < 10 ? sequenceNumb + 1 : sequenceNumb
            );
          }}
          type="submit"
        >
          Next
        </button>
        <button
          className="mt-4 mb-12 mx-4 p-2 px-10 bg-[#59E867] hover:bg-black text-black hover:text-[#B0ECFF] rounded-xl hover:cursor-pointer"
          onClick={() => {
            setSequenceNumb(
              sequenceNumb - 1 >= 0 ? sequenceNumb - 1 : sequenceNumb
            );
          }}
          type="submit"
        >
          Previous
        </button>
        <p>{sequenceNumb}</p>
      </div>
    </div>
  );
}

export default SequencerTest;
