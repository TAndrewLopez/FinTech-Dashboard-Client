import { Box, useTheme } from "@mui/material";

type Props = {};

const gridTemplate = `
    "revExp proRev moByMo"
    "revExp proRev moByMo"
    "revExp proRev moByMo"
    "revExp proRev priceVsExp"
    "opVsNonOp campTar priceVsExp"
    "opVsNonOp campTar priceVsExp"
    "opVsNonOp recOrd expBreak"
    "listProd recOrd expBreak"
    "listProd recOrd summary"
    "listProd recOrd summary"
`;

const Dashboard = (props: Props) => {
  const { palette } = useTheme();

  return (
    <Box
      width={"100%"}
      height={"100%"}
      display={"grid"}
      gap={"1.5rem"}
      sx={{
        gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
        gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
        gridTemplateAreas: gridTemplate,
      }}>
      <Box gridArea={"revExp"} bgcolor="#fff"></Box>
      <Box gridArea={"proRev"} bgcolor="#fff"></Box>
      <Box gridArea={"moByMo"} bgcolor="#fff"></Box>
      <Box gridArea={"opVsNonOp"} bgcolor="#fff"></Box>
      <Box gridArea={"campTar"} bgcolor="#fff"></Box>
      <Box gridArea={"priceVsExp"} bgcolor="#fff"></Box>
      <Box gridArea={"listProd"} bgcolor="#fff"></Box>
      <Box gridArea={"recOrd"} bgcolor="#fff"></Box>
      <Box gridArea={"expBreak"} bgcolor="#fff"></Box>
      <Box gridArea={"summary"} bgcolor="#fff"></Box>
    </Box>
  );
};

export default Dashboard;
