import React from "react";
//this function server as addition handler
const addValue = (e, setVal) => {
setVal((prev) => ({ ...prev, [e.target.name]: e.target.value}));
};

export default addValue;