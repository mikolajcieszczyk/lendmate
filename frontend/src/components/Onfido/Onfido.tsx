import React, { useState } from "react";
import axios from "axios";
import * as onfido from "onfido-sdk-ui";
import { Onfido, Region } from "@onfido/api";

const OnfidoCheck = () => {
  const [applicantID, setApplicantID] = useState();
  const [result, setResult] = useState(null);

  const createApplicant = async () => {
    try {
      const response = await axios({
        method: "post",
        url: "/v3/applicants",
        headers: {
          Authorization: `Token token=${import.meta.env.VITE_ONFIDO_API_TOKEN}`,
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        data: {
          first_name: "Jane",
          last_name: "Doe",
          dob: "1990-01-31",
          address: {
            building_number: "100",
            street: "Main Street",
            town: "London",
            postcode: "SW4 6EH",
            country: "GBR",
          },
          sandbox: true,
          location: {
            ip_address: "127.0.0.1",
            country_of_residence: "GBR",
          },
        },
      });

      const applicant = response.data;
      const id = response.data.id;

      console.log("Applicant: ", applicant);
      // console.log("Applicant ID: ", id);

      setApplicantID(id);
      return id;
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  const generateSdkToken = async () => {
    const onfido = new Onfido({
      apiToken: `${import.meta.env.VITE_ONFIDO_API_TOKEN}`,
      region: Region.EU,
    });

    try {
      const tokenResponse = await onfido.sdkToken.generate({
        applicantId: applicantID ?? "123",
        referrer: "http://localhost:5173/*",
        crossDeviceUrl: "http://localhost:5173",
      });

      const sdkToken = tokenResponse;
      console.log("SDK Token: ", sdkToken);

      // Kontynuuj wykorzystywanie SDK Tokena...
    } catch (error) {
      console.error("generateSdkToken: There was an error!", error);
      console.log(error);
    }
  };

  const verifyWithOnfido = async () => {
    const id = await createApplicant();
    console.log(id);
    try {
      const response = await axios({
        method: "post",
        url: "/v3/checks",
        headers: {
          Authorization: `Token token=${import.meta.env.VITE_ONFIDO_API_TOKEN}`,
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        data: {
          applicant_id: id,
          report_names: ["us_driving_licence"],
          us_driving_licence: {
            id_number: "1213131",
          },
        },
      });

      setResult(response.data);
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return (
    <div>
      <button onClick={verifyWithOnfido}>verifyWithOnfido</button>
      <br />
      <button onClick={generateSdkToken}>generateSdkToken</button>

      {result && (
        <div>
          <h3>Verification Results:</h3>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default OnfidoCheck;
