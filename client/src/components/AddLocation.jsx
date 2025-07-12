import { useForm } from "@mantine/form";
import { validateString } from "../utils/common";
import { Button, Group, Select, TextInput } from "@mantine/core";
import useCountries from "../hooks/useCountries";
import Map from "./Map";
import { useEffect, useState } from "react"; // <-- Add this

const AddLocation = ({ propertyDetails, setPropertyDetails, nextStep }) => {
  const { getAll } = useCountries();
  const form = useForm({
    initialValues: {
      country: propertyDetails?.country,
      city: propertyDetails?.city,
      address: propertyDetails?.address,
    },

    validate: {
      country: (value) => validateString(value),
      city: (value) => validateString(value),
      address: (value) => validateString(value),
    },
  });

  // Responsive flex direction
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { country, city, address } = form.values;

  const handleSubmit = () => {
    const { hasErrors } = form.validate();
    if (!hasErrors) {
      setPropertyDetails((prev) => ({ ...prev, city, address, country }));
      nextStep();
    }
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <div
        className="flexCenter"
        style={{
          justifyContent: "space-between",
          gap: "3rem",
          marginTop: "3rem",
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        {/* left side */}
        {/* inputs */}

        <div className="flexColStart" style={{ flex: 1, gap: "1rem" }}>
          <Select
            w={"100%"}
            withAsterisk
            label="Country"
            clearable
            searchable
            data={getAll()}
            {...form.getInputProps("country", { type: "input" })}
          />

          <TextInput
            w={"100%"}
            withAsterisk
            label="City"
            {...form.getInputProps("city", { type: "input" })}
          />

          <TextInput
            w={"100%"}
            withAsterisk
            label="Address"
            {...form.getInputProps("address", { type: "input" })}
          />
        </div>

        {/* right side */}

        <div style={{ flex: 1, justifyItems: "center" }}>
          <Map
            address={address}
            city={city}
            country={country}
            style={{
              height: isMobile ? "40vw" : "40vh",
              width: isMobile ? "70vw" : "100%",
              marginTop: isMobile ? "10px" : "20px",
              zIndex: 0,
            }}
          />
        </div>
      </div>

      <Group position="center" mt={"xl"}>
        <Button style={{ marginBottom: "5%" }} type="submit">
          Next Step
        </Button>
      </Group>
    </form>
  );
};

export default AddLocation;
