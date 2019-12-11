import React from 'react';
import Layout from "../components/layout";
import SEO from "../components/seo";
import FormComponent from "../components/FormComponent/formcomponent";

const Form = ({ location }) => {
    return <Layout>
      <SEO title="Form" />
      <FormComponent clickedOption={location.state.option} />
    </Layout>
}
  
export default Form
