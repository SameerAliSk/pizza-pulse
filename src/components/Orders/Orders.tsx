import React from "react";
import { Typography, Stack, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
const colors = {
  Delivered: "#50c878",
  Cancelled: "#ff6961",
  Ordered: "#FFA500",
  Shipped: "#40e0d0",
  Returned: "#df73ff",
};

export default function Orders() {
  return (
    <div className="categories-container">
      <Typography
        variant="subtitle2"
        component="h6"
        sx={{
          fontSize: "24px",
          fontWeight: "600",
          color: "#f13a01",
          marginBottom: "1rem",
        }}
      >
        All orders
      </Typography>
      <Stack direction="column" gap={1}>
        <Stack
          direction="row"
          gap={7}
          sx={{
            backgroundColor: "#f1f5f9",
            padding: "6px",
            borderRadius: "5px",
            border: "1px solid #B2FFFF",
          }}
        >
          <Button
            sx={{
              backgroundColor: colors["Delivered"],
              fontWeight: 600,
              color: "white !important",
              height: "2.5rem",
            }}
            disabled
          >
            Delivered
          </Button>
          <Stack direction="column" gap={0}>
            <Typography
              sx={{
                backgroundColor: "#f1f5f9",
                width: "25rem",
                height: "1.3rem",
                fontWeight: "600",
                color: "#000000",
              }}
            >
              sameer@gmail.com
            </Typography>
            <Typography
              variant="caption"
              sx={{ fontWeight: 500, color: "#4b5563" }}
            >
              Blazing Onion & Paprika,Fiery Sausage &
              Paprika,Margherita,Farmhouse,Peppy Paneer
            </Typography>
          </Stack>
          <Typography
            variant="subtitle2"
            sx={{ padding: "10px 0", color: "#64748b", fontWeight: 600 }}
          >
            20-11-2024 9:30
          </Typography>
          <Button
            variant="outlined"
            color="secondary"
            sx={{
              fontWeight: "600",
              height: "2.5rem",
            }}
          >
            Show Order
          </Button>
        </Stack>
        <Stack
          direction="row"
          gap={7}
          sx={{
            backgroundColor: "#f1f5f9",
            padding: "6px",
            borderRadius: "5px",
            border: "1px solid #B2FFFF",
          }}
        >
          <Button
            sx={{
              backgroundColor: colors["Cancelled"],
              fontWeight: 600,
              color: "white !important",
              height: "2.5rem",
            }}
            disabled
          >
            Delivered
          </Button>
          <Stack direction="column" gap={0}>
            <Typography
              sx={{
                backgroundColor: "#f1f5f9",
                width: "25rem",
                height: "1.3rem",
                fontWeight: "600",
                color: "#000000",
              }}
            >
              sameer@gmail.com
            </Typography>
            <Typography
              variant="caption"
              sx={{ fontWeight: 500, color: "#4b5563" }}
            >
              Blazing Onion & Paprika,Fiery Sausage &
              Paprika,Margherita,Farmhouse,Peppy Paneer
            </Typography>
          </Stack>
          <Typography
            variant="subtitle2"
            sx={{ padding: "10px 0", color: "#64748b", fontWeight: 600 }}
          >
            20-11-2024 9:30
          </Typography>
          <Button
            variant="outlined"
            color="secondary"
            sx={{
              fontWeight: "600",
              height: "2.5rem",
            }}
          >
            Show Order
          </Button>
        </Stack>
        <Stack
          direction="row"
          gap={7}
          sx={{
            backgroundColor: "#f1f5f9",
            padding: "6px",
            borderRadius: "5px",
            border: "1px solid #B2FFFF",
          }}
        >
          <Button
            sx={{
              backgroundColor: colors["Shipped"],
              fontWeight: 600,
              color: "white !important",
              height: "2.5rem",
            }}
            disabled
          >
            Delivered
          </Button>
          <Stack direction="column" gap={0}>
            <Typography
              sx={{
                backgroundColor: "#f1f5f9",
                width: "25rem",
                height: "1.3rem",
                fontWeight: "600",
                color: "#000000",
              }}
            >
              sameer@gmail.com
            </Typography>
            <Typography
              variant="caption"
              sx={{ fontWeight: 500, color: "#4b5563" }}
            >
              Blazing Onion & Paprika,Fiery Sausage &
              Paprika,Margherita,Farmhouse,Peppy Paneer
            </Typography>
          </Stack>
          <Typography
            variant="subtitle2"
            sx={{ padding: "10px 0", color: "#64748b", fontWeight: 600 }}
          >
            20-11-2024 9:30
          </Typography>
          <Button
            variant="outlined"
            color="secondary"
            sx={{
              fontWeight: "600",
              height: "2.5rem",
            }}
          >
            Show Order
          </Button>
        </Stack>
        <Stack
          direction="row"
          gap={7}
          sx={{
            backgroundColor: "#f1f5f9",
            padding: "6px",
            borderRadius: "5px",
            border: "1px solid #B2FFFF",
          }}
        >
          <Button
            sx={{
              backgroundColor: colors["Returned"],
              fontWeight: 600,
              color: "white !important",
              height: "2.5rem",
            }}
            disabled
          >
            Delivered
          </Button>
          <Stack direction="column" gap={0}>
            <Typography
              sx={{
                backgroundColor: "#f1f5f9",
                width: "25rem",
                height: "1.3rem",
                fontWeight: "600",
                color: "#000000",
              }}
            >
              sameer@gmail.com
            </Typography>
            <Typography
              variant="caption"
              sx={{ fontWeight: 500, color: "#4b5563" }}
            >
              Blazing Onion & Paprika,Fiery Sausage &
              Paprika,Margherita,Farmhouse,Peppy Paneer
            </Typography>
          </Stack>
          <Typography
            variant="subtitle2"
            sx={{ padding: "10px 0", color: "#64748b", fontWeight: 600 }}
          >
            20-11-2024 9:30
          </Typography>
          <Button
            variant="outlined"
            color="secondary"
            sx={{
              fontWeight: "600",
              height: "2.5rem",
            }}
          >
            Show Order
          </Button>
        </Stack>
        <Stack
          direction="row"
          gap={7}
          sx={{
            backgroundColor: "#f1f5f9",
            padding: "6px",
            borderRadius: "5px",
            border: "1px solid #B2FFFF",
          }}
        >
          <Button
            sx={{
              backgroundColor: colors["Ordered"],
              fontWeight: 600,
              color: "#ffffff !important",
              height: "2.5rem",
            }}
            disabled
          >
            Delivered
          </Button>
          <Stack direction="column" gap={0}>
            <Typography
              sx={{
                backgroundColor: "#f1f5f9",
                width: "25rem",
                height: "1.3rem",
                fontWeight: "600",
                color: "#000000",
              }}
            >
              sameer@gmail.com
            </Typography>
            <Typography
              variant="caption"
              sx={{ fontWeight: 500, color: "#4b5563" }}
            >
              Blazing Onion & Paprika,Fiery Sausage &
              Paprika,Margherita,Farmhouse,Peppy Paneer
            </Typography>
          </Stack>
          <Typography
            variant="subtitle2"
            sx={{ padding: "10px 0", color: "#64748b", fontWeight: 600 }}
          >
            20-11-2024 9:30
          </Typography>
          <Button
            variant="outlined"
            color="secondary"
            sx={{
              fontWeight: "600",
              height: "2.5rem",
            }}
          >
            Show Order
          </Button>
        </Stack>
        <Stack
          direction="row"
          gap={7}
          sx={{
            backgroundColor: "#f1f5f9",
            padding: "6px",
            borderRadius: "5px",
            border: "1px solid #B2FFFF",
          }}
        >
          <Button
            sx={{
              backgroundColor: colors["Delivered"],
              fontWeight: 600,
              color: "white !important",
              height: "2.5rem",
            }}
            disabled
          >
            Delivered
          </Button>
          <Stack direction="column" gap={0}>
            <Typography
              sx={{
                backgroundColor: "#f1f5f9",
                width: "25rem",
                height: "1.3rem",
                fontWeight: "600",
                color: "#000000",
              }}
            >
              sameer@gmail.com
            </Typography>
            <Typography
              variant="caption"
              sx={{ fontWeight: 500, color: "#4b5563" }}
            >
              Blazing Onion & Paprika,Fiery Sausage &
              Paprika,Margherita,Farmhouse,Peppy Paneer
            </Typography>
          </Stack>
          <Typography
            variant="subtitle2"
            sx={{ padding: "10px 0", color: "#64748b", fontWeight: 600 }}
          >
            20-11-2024 9:30
          </Typography>
          <Button
            variant="outlined"
            color="secondary"
            sx={{
              fontWeight: "600",
              height: "2.5rem",
            }}
          >
            Show Order
          </Button>
        </Stack>
        <Stack
          direction="row"
          gap={7}
          sx={{
            backgroundColor: "#f1f5f9",
            padding: "6px",
            borderRadius: "5px",
            border: "1px solid #B2FFFF",
          }}
        >
          <Button
            sx={{
              backgroundColor: colors["Delivered"],
              fontWeight: 600,
              color: "white !important",
              height: "2.5rem",
            }}
            disabled
          >
            Delivered
          </Button>
          <Stack direction="column" gap={0}>
            <Typography
              sx={{
                backgroundColor: "#f1f5f9",
                width: "25rem",
                height: "1.3rem",
                fontWeight: "600",
                color: "#000000",
              }}
            >
              sameer@gmail.com
            </Typography>
            <Typography
              variant="caption"
              sx={{ fontWeight: 500, color: "#4b5563" }}
            >
              Blazing Onion & Paprika,Fiery Sausage &
              Paprika,Margherita,Farmhouse,Peppy Paneer
            </Typography>
          </Stack>
          <Typography
            variant="subtitle2"
            sx={{ padding: "10px 0", color: "#64748b", fontWeight: 600 }}
          >
            20-11-2024 9:30
          </Typography>
          <Button
            variant="outlined"
            color="secondary"
            sx={{
              fontWeight: "600",
              height: "2.5rem",
            }}
          >
            Show Order
          </Button>
        </Stack>
      </Stack>
    </div>
  );
}
