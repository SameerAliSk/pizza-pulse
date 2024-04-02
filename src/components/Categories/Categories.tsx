import React, { useState } from "react";
import {
  Typography,
  Stack,
  Paper,
  TextField,
  FormControl,
  InputLabel,
  createTheme,
  ThemeProvider,
  IconButton,
  Chip,
  ButtonGroup,
  Button,
} from "@mui/material";
import "./Categories.css";
export default function Categories() {
  const [newCategory, setNewCategory] = useState("");
  const handleNewCategoryChange = (
    event: React.ChangeEvent<{ value: string }>
  ) => {
    setNewCategory(event.target.value);
  };
  return (
    <div className="categories-container">
      <Stack direction="row" gap={1} sx={{ paddingBottom: "4rem" }}>
        <Stack direction="column" gap={0}>
          <Typography
            variant="subtitle2"
            component="h6"
            sx={{ fontSize: "16px", fontWeight: "600", color: "#f13a01" }}
          >
            New Category Name
          </Typography>
          <input
            type="text"
            value={newCategory}
            onChange={handleNewCategoryChange}
          />
        </Stack>
        <Button
          variant="contained"
          sx={{
            height: "33px",
            marginTop: "1.5rem",
            backgroundColor: "#ff0800",
            fontWeight: "600",
          }}
        >
          Create
        </Button>
        <Button
          variant="outlined"
          sx={{
            height: "33px",
            marginTop: "1.5rem",
            fontWeight: "600",
            color: "#4b5563",
            borderColor: "#d1d5db",
            "&:hover": {
              backgroundColor: "#ffffff",
              borderColor: "#d1d5db",
            },
          }}
        >
          Cancel
        </Button>
      </Stack>
      <Typography
        variant="subtitle2"
        component="h6"
        sx={{ fontSize: "24px", fontWeight: "600", color: "#f13a01" }}
      >
        Existing Categories
      </Typography>
      <Stack direction="column" gap={1}>
        <Stack
          direction="row"
          gap={1}
          sx={{
            backgroundColor: "#f1f5f9",
            padding: "6px",
            borderRadius: "5px",
          }}
        >
          <Typography
            sx={{
              backgroundColor: "#f1f5f9",
              border: "solid 1px #ccc",
              width: "25rem",
              height: "1.3rem",
              borderRadius: "5px",
              padding: "5px",
              fontWeight: "600",
            }}
          >
            Pizza
          </Typography>
          <Button
            variant="outlined"
            sx={{
              height: "33px",
              fontWeight: "600",
              backgroundColor: "#7FFF00",
              borderColor: "#7FFF00",
              color: "#0f0f0f",
              "&:hover": {
                backgroundColor: "#6DE600",
                borderColor: "#6DE600",
              },
            }}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            sx={{
              height: "33px",
              fontWeight: "600",
              backgroundColor: "#cf352e",
              borderColor: "#cf352e",
              "&:hover": {
                backgroundColor: "#B02B25",
                borderColor: "#d1d5db",
              },
            }}
          >
            Delete
          </Button>
        </Stack>
        <Stack
          direction="row"
          gap={1}
          sx={{
            backgroundColor: "#f1f5f9",
            padding: "6px",
            borderRadius: "5px",
          }}
        >
          <Typography
            sx={{
              backgroundColor: "#f1f5f9",
              border: "solid 1px #ccc",
              width: "25rem",
              height: "1.3rem",
              borderRadius: "5px",
              padding: "5px",
              fontWeight: "600",
            }}
          >
            Pizza
          </Typography>
          <Button
            variant="outlined"
            sx={{
              height: "33px",
              fontWeight: "600",
              color: "#4b5563",
              borderColor: "#d1d5db",
              "&:hover": {
                backgroundColor: "#f8fafc",
                borderColor: "#d1d5db",
              },
            }}
          >
            Edit
          </Button>
          <Button
            variant="outlined"
            sx={{
              height: "33px",
              fontWeight: "600",
              color: "#4b5563",
              borderColor: "#d1d5db",
              "&:hover": {
                backgroundColor: "#f8fafc",
                borderColor: "#d1d5db",
              },
            }}
          >
            Delete
          </Button>
        </Stack>
        <Stack
          direction="row"
          gap={1}
          sx={{
            backgroundColor: "#f1f5f9",
            padding: "6px",
            borderRadius: "5px",
          }}
        >
          <Typography
            sx={{
              backgroundColor: "#f1f5f9",
              border: "solid 1px #ccc",
              width: "25rem",
              height: "1.3rem",
              borderRadius: "5px",
              padding: "5px",
              fontWeight: "600",
            }}
          >
            Pizza
          </Typography>
          <Button
            variant="outlined"
            sx={{
              height: "33px",
              fontWeight: "600",
              color: "#4b5563",
              borderColor: "#d1d5db",
              "&:hover": {
                backgroundColor: "#f8fafc",
                borderColor: "#d1d5db",
              },
            }}
          >
            Edit
          </Button>
          <Button
            variant="outlined"
            sx={{
              height: "33px",
              fontWeight: "600",
              color: "#4b5563",
              borderColor: "#d1d5db",
              "&:hover": {
                backgroundColor: "#f8fafc",
                borderColor: "#d1d5db",
              },
            }}
          >
            Delete
          </Button>
        </Stack>
        <Stack
          direction="row"
          gap={1}
          sx={{
            backgroundColor: "#f1f5f9",
            padding: "6px",
            borderRadius: "5px",
          }}
        >
          <Typography
            sx={{
              backgroundColor: "#f1f5f9",
              border: "solid 1px #ccc",
              width: "25rem",
              height: "1.3rem",
              borderRadius: "5px",
              padding: "5px",
              fontWeight: "600",
            }}
          >
            Pizza
          </Typography>
          <Button
            variant="outlined"
            sx={{
              height: "33px",
              fontWeight: "600",
              color: "#4b5563",
              borderColor: "#d1d5db",
              "&:hover": {
                backgroundColor: "#f8fafc",
                borderColor: "#d1d5db",
              },
            }}
          >
            Edit
          </Button>
          <Button
            variant="outlined"
            sx={{
              height: "33px",
              fontWeight: "600",
              color: "#4b5563",
              borderColor: "#d1d5db",
              "&:hover": {
                backgroundColor: "#f8fafc",
                borderColor: "#d1d5db",
              },
            }}
          >
            Delete
          </Button>
        </Stack>
      </Stack>
    </div>
  );
}
