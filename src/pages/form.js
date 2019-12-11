import React from 'react';
import Layout from "../components/layout";
import SEO from "../components/seo";
import FormComponent from "../components/FormComponent/formcomponent";

const Form = ({ data, location }) => {
    const formData = data.takeshape.getForm;
    let clickedOption = location.state ? location.state.option : 0;
    return <Layout>
      <SEO title="Form" />
      <FormComponent clickedOption={clickedOption} formData={formData} />
    </Layout>
}
  
export default Form

export const query = graphql`
  query {
    takeshape {
        getForm {
          _id
          overarchingDescription
          step1 {
            customRides {
              description
              title
            }
            disclaimer
            rideNumberTitle
            rideOption1 {
              description
              title
            }
            rideOption2 {
              description
              title
            }
            rideOption3 {
              description
              title
            }
            stepTitle
            title
          }
          step2 {
            messageHelpText
            stepTitle
          }
          step3 {
            dateDisclaimer
            stepTitle
          }
          title
        }
      
      
  }
}
`

