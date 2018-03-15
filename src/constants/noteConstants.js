export const HOW_TO_CREATE_A_RESOURCE_NOTES = [
  {
    message: 'Login to the Tech Portal at https://tech-management.herokuapp.com',
    startPoint: 1,
    selected: null
  },
  {
    message: 'Select "resource center" from the top navigation bar',
    startPoint: 3   ,
    selected: null
  },
  {
    message: 'Add a title, your draft will begin to populate with your inputs',
    startPoint: 10,
    selected: null
  },
  {
    message: 'Add a category',
    startPoint: 19,
    selected: null
  },
  {
    message: 'Add a helpful description',
    startPoint: 29,
    selected: null
  },
  {
    message: 'Add the first step',
    startPoint: 45,
    selected: null
  },
  {
    message: 'The step links to an external site',
    startPoint: 50,
    selected: null
  },
  {
    message: 'The link must be in the format shown: "[display text]: hyperlink text"',
    startPoint: 53,
    selected: null
  },
  {
    message: 'Submit the link using "ctrl + enter"',
    startPoint: 65,
    selected: null
  },
  {
    message: 'Reference the link using the following format: "[link [link number]]"',
    startPoint: 70,
    selected: null
  },
  {
    message: 'Link numbers are assigned in the order of submission',
    startPoint: 75,
    selected: null
  },
  {
    message: 'Submit the rest of the steps',
    startPoint: 80,
    selected: null
  },
  {
    message: 'Search Tags are required before submitting the finalized resource',
    startPoint: 120,
    selected: null
  },
  {
    message: 'Enter your comma separated tags, they will populate in your draft as you type',
    startPoint: 125,
    selected: null
  },
  {
    message: 'Enter your comma separated tags, they will populate in your draft as you type',
    startPoint: 125,
    selected: null
  },
  {
    message: 'Apply the "ops/tech only" flag if these steps should be handled internally by ops\nThis resource will not be accessible to users in other departments',
    startPoint: 139,
    selected: null
  },
  {
    message: 'All set!',
    startPoint: 150,
    selected: null
  }


]

export const getMeetingNotes = note => {
  switch(note) {
    case 'HOW_TO_CREATE_A_RESOURCE_NOTES':
      return HOW_TO_CREATE_A_RESOURCE_NOTES
    default:
      return null
  }
}
