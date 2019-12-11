import React from 'react';
import Layout from "../components/layout";
import SEO from "../components/seo";
import FormComponent from "../components/FormComponent/formcomponent";

const Form = ({ location }) => {
    let clickedOption = location.state ? location.state.option : 0;
    return <Layout>
      <SEO title="Form" />
      <FormComponent clickedOption={clickedOption} />
    </Layout>
}
  
export default Form
