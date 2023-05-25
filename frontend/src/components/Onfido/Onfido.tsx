import React, { useEffect } from "react";
import * as Onfido from "onfido-sdk-ui";
import { useMutation, gql } from "@apollo/client";

const CREATE_APPLICANT = gql`
  mutation CreateApplicant($firstName: String!, $lastName: String!) {
    createApplicant(firstName: $firstName, lastName: $lastName) {
      applicantId
      sdkToken
    }
  }
`;

const OnfidoComponent = () => {
  const [createApplicant, { data, error }] = useMutation(CREATE_APPLICANT);
  if (error) {
    console.log("Mutation error", error);
  }
  useEffect(() => {
    if (data) {
      Onfido.init({
        token: data.createApplicant.sdkToken,
        containerId: "onfido-mount",
        steps: ["welcome", "document", "face", "complete"],
      });
    }
  }, [data]);

  console.log(data);

  const handleClick = () => {
    createApplicant({ variables: { firstName: "John", lastName: "Doe" } });
  };

  return (
    <div>
      <button onClick={handleClick}>Start Verification</button>
      <div id="onfido-mount"></div>
    </div>
  );
};

export default OnfidoComponent;
