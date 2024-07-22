import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, Box, IconButton } from "@mui/material";
import DraftChart from "../DraftChart/DraftChart";
import styled from "styled-components";
import { fetchDataForGraphs } from "../../utils/fetchData";
import { useAuthStore } from "../../store/authStore";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { StyledLabel, StyledTitle } from "./styled";
import {data} from '../../utils/testData'

const MonthSwitchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const ChartSection = () => {
  const currentMonth = useAuthStore((state) => state.currentMonth);
  const setCurrentMonth = useAuthStore((state) => state.setCurrentMonth);

  const currentYear = useAuthStore((state) => state.currentYear);
  const setCurrentYear = useAuthStore((state) => state.setCurrentYear);

  const [isDisabled, setIsDisabled] = useState(false);
  const [graph_data, setGraphData] = useState([]);

  useEffect(() => {
    fetchGraphData();
  }, []);

  async function fetchGraphData() {
    // const graphdata = await fetchDataForGraphs();
    setGraphData(data); //test data from utils/testData.js
  }

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const handlePreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentYear(currentYear - 1);
      setCurrentMonth(11);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentYear(currentYear + 1);
      setCurrentMonth(0);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const filteredData = graph_data.filter((item) => {
    const itemDate = new Date(item.purchase_date);
    return (
      itemDate.getMonth() === currentMonth &&
      itemDate.getFullYear() === currentYear
    );
  });

  const monthLabel = `${months[currentMonth]}, ${currentYear}`;

  const disabled = () => {
    if (
      currentMonth == new Date().getMonth() &&
      currentYear == new Date().getFullYear()
    ) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  };
  useEffect(() => {
    disabled();
  }, [currentMonth]);

  return (
    <>
      <Card sx={{ mt: 4 }}>
        <CardContent>
          <StyledTitle>
            <h3>Order Requests</h3>
            <p>Updates Daily</p>
          </StyledTitle>
          <MonthSwitchBar>
            <IconButton sx={{ color: "#1C58CF" }} onClick={handlePreviousMonth}>
              <ArrowBackIosNewIcon sx={{ fontSize: 18 }} />
            </IconButton>
            <StyledLabel>{monthLabel}</StyledLabel>
            <IconButton
              sx={{ color: "#1C58CF" }}
              onClick={handleNextMonth}
              disabled={isDisabled}
            >
              <ArrowForwardIosIcon sx={{ fontSize: 18 }} />
            </IconButton>
          </MonthSwitchBar>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <Box sx={{ width: "100%", maxWidth: 1200 }}>
              {filteredData.length > 0 ? (
                <DraftChart data={filteredData} />
              ) : (
                <Typography
                  variant="h6"
                  align="center"
                  sx={{
                    color: "#777",
                    fontStyle: "italic",
                    height: 400,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  No data found for this period
                </Typography>
              )}
            </Box>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default ChartSection;
