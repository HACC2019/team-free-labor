import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';
/** RENAME FILE TO SOMETHING ELSEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE */
/** Define a Mongo collection to hold the data.
 * ['', '', '', '', '', '', '', '', '', '', ], */
const Stuffs = new Mongo.Collection('Stuffs');

/** How to implement "other". IF other is checked, make a form available" */
const AppFormValues = {
  howDidYouHearAbout: ['Contractor', 'Community Organization', 'News/Radio/TV', 'Online (Internet)', 'Utility',
  'Public Event', 'Hawaii Energy', 'Friends & Family'],
  whichDoYouHaveInHome: ['Washer', 'Dryer', ' Kitchen Refrigerator', '2nd Refrigerator',
    'Chest Freezer', 'Solar Hot Water heater', 'Solar PV System', 'LED or CFL Light Bulbs', 'WIFI'],
  interestedInInstalling: ['Washer', 'Dryer', 'Kitchen Refrigerator', 'Solar Hot Water Heater',
    'Solar PV System', 'LED or CFL Light Bulbs'],
  assistanceFrom: ['Church', 'Community Event', 'School/Class', 'Online', 'Accountant/Tax Preparer',
    'Financial Advisor'],
  wouldLikeToInstall: ['Solar Thermal Hot Water Heater', 'Solar PV Water Heater', 'Heat Pump Water Heater', 'Solar PV System'],
  whichIsland: ['Oahu', 'Maui', 'Lanai', 'Molokai', 'Hawaii'],


};


/** Define a schema to specify the structure of each document in the collection. */
const StuffSchema = new SimpleSchema({
  howDidYouHearAbout: { type: String, optional: true, allowedValues: AppFormValues.howDidYouHearAbout },
  otherHDYHA: String,
  whichDoYouHaveInHome: { type: String, optional: true, allowedValues: AppFormValues.whichDoYouHaveInHome },
  interestedInInstalling: { type: String, optional: true, allowedValues: AppFormValues.interestedInInstalling },
  assistanceFrom: { type: String, optional: true, allowedValues: AppFormValues.assistanceFrom },
  anyoneYouKnowName: String,
  anyoneYouKnowPhone: Number,
  anyoneYouKnowEmail: String,
  nameOnUtilAcc: String,
  utilAccNum: Number,
  wouldLikeToInstall: { type: String, optional: true, allowedValues: AppFormValues.wouldLikeToInstall },
  approvedContractorName: String,
  approvedContractorContact: String,
  installAddress: String,
  whichIsland: { type: String, allowedValues: AppFormValues.assistanceFrom },






}, { tracker: Tracker });

/** Attach this schema to the collection. */
Stuffs.attachSchema(StuffSchema);

/** Make the collection and schema available to other code. */
export { Stuffs, StuffSchema };
