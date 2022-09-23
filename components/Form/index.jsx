import useAxiosHook from "axios-hook-library";
import { useEffect, useState } from "react";

import * as Styled from "./styled";

const Form = () => {
  const { isLoading, isSuccess, hasError, fetchData } = useAxiosHook(2000);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSend = (e) => {
    e.preventDefault();
    fetchData(
      "https://node-sendmail.vercel.app/api/sendmail",
      "POST",
      formData
    );
    
  };

  useEffect(() => {
    setFormData({
      name: "",
      email: "",
      message: ""
    })
  },[isSuccess])

  return (
    <Styled.Form onSubmit={(e) => handleSend(e)}>
      <Styled.Input
        placeholder="Name"
        required
        type="text"
        value={formData.name}
        onChange={(e) =>
          setFormData({
            ...formData,
            name: e.target.value,
          })
        }
      />
      <Styled.Input
        placeholder="Email"
        required
        type="email"
        value={formData.email}
        onChange={(e) =>
          setFormData({
            ...formData,
            email: e.target.value,
          })
        }
      />
      <Styled.TextArea
        rows="10"
        required
        placeholder="Your message here"
        value={formData.message}
        onChange={(e) =>
          setFormData({
            ...formData,
            message: e.target.value,
          })
        }
      />
      <Styled.Submit type="submit" small disabled={isLoading}>
        {isLoading ? "Sending" : "Submit"}
      </Styled.Submit>
      <Styled.SubmitMessageWrapper>
        <Styled.SubmitMessage isVisible={hasError} hasError>
          Some error occurred, try again.
        </Styled.SubmitMessage>
        <Styled.SubmitMessage isVisible={isSuccess}>
          Data Sent!
        </Styled.SubmitMessage>
      </Styled.SubmitMessageWrapper>
    </Styled.Form>
  );
};

export default Form;
