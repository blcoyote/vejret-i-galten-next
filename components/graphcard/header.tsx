import { CardHeader, styled } from "@mui/material";


export const Header = styled(CardHeader)({
    backgroundColor: "red",
    color: "white",
    padding: "10px",
    borderRadius: "5px",
    textAlign: "center",
    fontSize: "1.5rem",
    fontWeight: "bold",
    fontFamily: "monospace",
    letterSpacing: ".1rem",
    textTransform: "uppercase",
    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
    "&:hover": {
        backgroundColor: "red",
        color: "white",                                                     
    },
});