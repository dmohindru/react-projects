import { Paper, Typography } from "@mui/material";
interface RandomValueComponentProps {
  label: string;
  numberValue?: number;
  stringValue?: string;
}
const RandomValueComponent: React.FC<RandomValueComponentProps> = ({
  label,
  numberValue,
  stringValue,
}) => {
  return (
    <Paper
      elevation={2}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: 2,
      }}
    >
      <Typography variant="body1">{label}</Typography>
      <Typography variant="h5" fontWeight="bold">
        {numberValue && numberValue} {stringValue && stringValue}
      </Typography>
    </Paper>
  );
};

export default RandomValueComponent;
