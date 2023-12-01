import React, { useState } from "react";
import UserProfile from "../../common/UserProfile";
import { TextField, Button, Stack, Grid, Typography, Box } from "@mui/material";
import TagSelector from "./TagSelector";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import DatePicker from "../../common/utils/DatePicker";
const CreateHackathon = () => {
  const [tags, setTags] = useState([]);
  const [values, setValues] = useState({
    dateTo: "",
  });
  const { dateTo } = values;
  const [timelineItems, setTimelineItems] = useState([
    { period_name: "", start_date: "" },
  ]);
  const readCategories = (categoriesArray) => {
    setTags(categoriesArray);
  };
  const handleAddTimelineItems = () => {
    const values = [...timelineItems];
    values.push({
      period_name: "",
      start_date: "",
    });
    setTimelineItems(values);
  };
  const handleRemoveTimelineItems = (index) => {
    const values = [...timelineItems];
    values.splice(index, 1);
    setTimelineItems(values);
  };
  const handleInputChange = (index, event) => {
    const values = [...timelineItems];
    const updatedValue = event.target.name;
    values[index][updatedValue] = event.target.value;
    setTimelineItems(values);
  };
  const handleCompletionDateChange = (date) => {
    setValues({ ...values, dateTo: date });
  };
  return (
    <div className="bg-white p-8 right-side min-h-screen">
      <div className="ml-60">
        <div className="flex justify-between">
          <h1 className="text-gray-600 font-bold text-[24px]">Hackathons</h1>
          <UserProfile />
        </div>
        <p className="text-xs text-gray-500 flex flex-row">
          <span>Hackathons</span>
          <img
            src="/assets/chevron-right-solid.svg"
            className="w-2 h-2 mt-[4px] m-1"
            alt="chevron"
          />
          <span>Create a hackathon</span>
          <img
            src="/assets/chevron-right-solid.svg"
            className="w-2 h-2 mt-[4px] m-1"
            alt="chevron"
          />
          <span>Basic details</span>
        </p>
        {/* <p className="font-bold mt-5 mb-5">Create a hackathon</p> */}
        <div className="flex">
          <div>
            <form className="flex gap-[100px]">
              <div className="flex flex-col ">
                <label
                  className="font-semibold mt-5 mb-2 text-xs "
                  name="projectName"
                >
                  Hackathon title
                </label>
                <input
                  type="text"
                  className="w-[500px] px-3 py-2 border border-gray-400 rounded text-xs
        focus:outline-none focus:border-custom-blue "
                  placeholder="Stack a Stake Competition"
                  required
                />
                {/* <span className="text-xs text-gray-400 mt-2">
                  Do not exceed 20 character writing the project name
                </span> */}
                <label
                  className="mt-5 mb-2 text-xs font-semibold"
                  name="projectName"
                >
                  Hackathon highlight Phrase
                </label>
                <input
                  type="text"
                  className="w-[500px] px-3 py-2 border border-gray-400 rounded text-xs
        focus:outline-none focus:border-custom-blue "
                  placeholder="Building for the future"
                  required
                />
                <label
                  className="mt-5 mb-2 text-xs font-semibold"
                  name="projectName"
                >
                  Location
                </label>
                <input
                  type="text"
                  className="w-[500px] px-3 py-2 border border-gray-400 rounded text-xs
        focus:outline-none focus:border-custom-blue "
                  placeholder="virtual, hybrid, onsite, etc"
                  required
                />
                <label
                  className="font-semibold mt-5 mb-2 text-xs"
                  name="projectDescription"
                >
                  Description
                </label>
                <TextField
                  id="outlined-multiline-static"
                  label=""
                  multiline
                  rows={4}
                  defaultValue=""
                />

                <label
                  className="font-semibold mt-5 mb-2 text-xs "
                  name="projectName"
                >
                  Hackathon categories
                </label>
                <div className="flex flex-row border-gray-200 rounded p-2 border gap-2">
                  <TagSelector func={readCategories} />
                </div>
                <div className="flex flex-row gap-5">
                  <ValidatorForm
                    autoComplete="off"
                    // onSubmit={(e) => testSubmit(e)}
                  >
                    {timelineItems.length > 0 &&
                      timelineItems.map((field, index) => {
                        return (
                          <Stack key={index}>
                            <Grid
                              container
                              // xs={12}
                              component="fieldset"
                              sx={{
                                border: "solid 3px #295FAB",
                                borderRadius: "15px",
                                padding: (theme) => theme.spacing(2),
                              }}
                            >
                              <legend>
                                <Typography>Hackathon Timeline</Typography>
                              </legend>
                              <Grid sx={{ m: 1 }}>
                                <Box>
                                  <Typography sx={{ fontWeight: "500" }}>
                                    Event Name
                                  </Typography>
                                  <TextValidator
                                    placeholder="project ideation"
                                    fullWidth
                                    value={field.detail}
                                    onChange={(event) =>
                                      handleInputChange(index, event)
                                    }
                                    type="text"
                                    name="detail"
                                    validators={["required"]}
                                    errorMessages={["This Field is Required"]}
                                  />
                                </Box>
                                <Box>
                                  <Typography sx={{ fontWeight: "500" }}>
                                    Date Due
                                  </Typography>
                                  {/* put a date field here */}
                                  <DatePicker
                                    handleDateChange={
                                      handleCompletionDateChange
                                    }
                                  />
                                </Box>
                                <Box sx={{ mt: 2 }}>
                                  <Button
                                    sx={{
                                      color: "error.main",
                                      borderColor: "error.main",
                                    }}
                                    variant="outlined"
                                    onClick={() =>
                                      handleRemoveTimelineItems(index)
                                    }
                                  >
                                    Remove Entry
                                  </Button>
                                </Box>
                              </Grid>
                            </Grid>
                          </Stack>
                        );
                      })}
                    <Grid>
                      <Box>
                        <Stack direction="row">
                          {" "}
                          <Button
                            variant="outlined"
                            onClick={() => handleAddTimelineItems()}
                            sx={{ mt: 1, borderRadius: 2 }}
                          >
                            Add timeline entry
                          </Button>
                        </Stack>
                      </Box>
                      <Box>
                        {" "}
                        <Button
                          // type="submit"
                          variant="contained"                          
                          sx={{
                            fontSize: "1rem",
                            color: "white",
                            mt: 1,
                            bgcolor: "green",
                          }}
                        >
                          Save Timeline Info
                        </Button>{" "}
                      </Box>
                    </Grid>
                  </ValidatorForm>
                </div>
              </div>
              <div className="flex flex-col">
                <label
                  className="font-semibold mt-5 mb-2 text-xs "
                  name="projectName"
                >
                  Hackathon project deliverables
                </label>
                <TextField
                  id="outlined-multiline-static"
                  label=""
                  multiline
                  rows={4}
                  defaultValue=""
                  sx={{ width: "450px" }}
                />
                <label
                  className="font-semibold mt-5 mb-2 text-xs "
                  name="projectName"
                >
                  Hackathon project Goals
                </label>
                <TextField
                  id="outlined-multiline-static"
                  label=""
                  multiline
                  rows={4}
                  defaultValue=""
                />
                <label
                  className="font-semibold mt-5 mb-2 text-xs "
                  name="projectName"
                >
                  Hackathon prizes
                </label>
                <TextField
                  id="outlined-multiline-static"
                  label=""
                  multiline
                  rows={4}
                  defaultValue=""
                />
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="  text-white  text-xs font-semibold bg-custom-blue  rounded-md p-2 w-[200px] mt-[20px]"
                  >
                    Submit Hackathon details
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateHackathon;
