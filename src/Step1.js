import React, {useState } from "react";
import { useHistory } from "react-router-dom";
import { useData } from "./DataContext";
import Typography from "@material-ui/core/Typography";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import { PrimaryButton } from "./components/PrimaryButton";
import { MainContainer } from "./components/MainContainer";
import { Form } from "./components/Form";
import { Input } from "./components/Input";
import * as yup from "yup";
import Confetti from "react-confetti";
import Swal from "sweetalert2";
import cosmo from './photos/CosmoNeutral.jpg';
import cosmoSad from './photos/CosmoSad.jpg';
import cosmoSmile from './photos/CosmoSmile2.jpg'



const schema = yup.object().shape({
  secretCode: yup.number()
    .typeError('The secret code is a 6 digit number')
    .test('len', 'The secret code is a 6 digit number', val => JSON.stringify(val).length === 6)
    

});

export const Step1 = () => {
  const [success, setSuccess] = useState(false);
  const history = useHistory();
  const { data, setData } = useData();
  const { register, handleSubmit, errors } = useForm({
    defaultValues: { secretCode: ''},
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data2) => {
    if(data2.secretCode===666666){
    setSuccess(true)
    setData({photo: cosmoSmile})
    Swal.fire({
      icon: 'success',
      title: 'Congratulations!',
      text: 'You entered the correct code!',
      })
  } else {
    setData({photo: cosmoSad});
    Swal.fire({
      icon: 'error',
      title: 'Incorrect',
      text: 'Keep trying!!',
      });
    setTimeout(()=>{setData({photo: cosmo})}, 6000);
  }
  };

  if (success) {
    return (
    <>
    <Confetti />
    
    </>
    );
  }

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        🎲 What is the secret code?
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          ref={register}
          id="secretCode"
          type="number"
          label="Secret code"
          name="secretCode"
          error={!!errors.secretCode}
          helperText={errors?.secretCode?.message}
        />

        <PrimaryButton>Submit</PrimaryButton>
      </Form>
    </MainContainer>
  );
};
