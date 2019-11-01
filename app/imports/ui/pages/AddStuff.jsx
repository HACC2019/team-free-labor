import React from 'react';
import { Stuffs } from '/imports/api/stuff/Stuff';
import { Grid, Segment, Header } from 'semantic-ui-react';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import NumField from 'uniforms-semantic/NumField';
import SelectField from 'uniforms-semantic/SelectField';
import SubmitField from 'uniforms-semantic/SubmitField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import BoolField from 'uniforms-unstyled/BoolField';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import SimpleSchema from 'simpl-schema';
import { AppFormValues } from '../../api/stuff/Stuff';


/** Create a schema to specify the structure of the data to appear in the form. */
const formSchema = new SimpleSchema({
  name: String,
  quantity: Number,
  condition: {
    type: String,
    allowedValues: ['excellent', 'good', 'fair', 'poor'],
    defaultValue: 'good',
  },

  otherHDYHA: String,
  howDidYouHearAboutUs: { type: Array },
  'howDidYouHearAboutUs.$': { type: String, optional: true, allowedValues: AppFormValues.howDidYouHearAbout },

  washer: Boolean,
  ageOfWasher: Number,
  dryer: Boolean,
  ageOfDryer: Number,
  kitchenRefrigerator: Boolean,
  ageOfKitchenRefrigerator: Number,
  secondRefrigerator: Boolean,
  ageOfSecondRefrigerator: Number,
  chestFreezer: Boolean,
  ageOfChestFreezer: Number,
  solarHWHeater: Boolean,
  ageOfSolarHWHeater: Number,
  PVSystem: Boolean,
  ageOfPVSystem: Number,
  LEDCFLBulbs: Boolean,
  WIFI: Boolean,

});

/** Renders the Page for adding a document. */
class AddStuff extends React.Component {

  /** On submit, insert the data. */
  submit(data, formRef) {
    const { name, quantity, condition, otherHDYHA } = data;
    const owner = Meteor.user().username;
    Stuffs.insert({ name, quantity, condition, otherHDYHA, owner }, //EDIT THISSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Item added successfully', 'success');
          formRef.reset();
        }
      });
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    let fRef = null;
    return (
        <Grid container centered>
          <Grid.Column>
            <Header as="h2" textAlign="center">Add Stuff</Header>
            <AutoForm ref={ref => { fRef = ref; }} schema={formSchema} onSubmit={data => this.submit(data, fRef)} >
              <Segment>
                <TextField name='name'/>
                <NumField name='quantity' decimal={false}/>
                <SelectField name='condition'/>
                <SelectField checkboxes name='howDidYouHearAboutUs'/>
                <TextField name='otherHDYHA'/>
                <BoolField name='washer' fluid label='Washer'/>
                <NumField name='ageOfWasher' decimal={false} label={false} placeholder={'Age of washer'}/>
                <BoolField name='dryer'/>
                <NumField name='ageOfDryer' decimal={false} label={false} placeholder={'Age of washer'}/>
                <BoolField name='kitchenRefrigerator'/>
                <NumField name='ageOfKitchenRefrigerator' decimal={false} label={false} placeholder={'Age of washer'}/>
                <BoolField name='secondRefrigerator'/>
                <NumField name='ageOfSecondRefrigerator' decimal={false} label={false} placeholder={'Age of washer'}/>
                <BoolField name='chestFreezer'/>
                <NumField name='ageOfChestFreezer' decimal={false} label={false} placeholder={'Age of washer'}/>
                <BoolField name='solarHWHeater'/>
                <NumField name='ageOfSolarHWHeater' decimal={false} label={false} placeholder={'Age of washer'}/>
                <BoolField name='PVSystem'/>
                <NumField name='ageOfPVSystem' decimal={false} label={false} placeholder={'Age of washer'}/>
                <BoolField name='LEDCFLBulbs'/>
                <BoolField name='WIFI'/>


                <SubmitField value='Submit'/>
                <ErrorsField/>
              </Segment>
            </AutoForm>
          </Grid.Column>
        </Grid>
    );
  }
}

export default AddStuff;
