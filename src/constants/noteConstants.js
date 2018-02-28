export const HOW_TO_START_A_MEETING_NOTES = [
  {
    message: 'select your date',
    startPoint: 1,
    selected: null
  },
  {
    message: 'select "conference room" from the drop down',
    startPoint: 2,
    selected: null
  },
  {
    message: 'edit the meeting',
    startPoint: 8,
    selected: null
  },
  {
    message: 'add conferencing',
    startPoint: 12,
    selected: null
  },
  {
    message: 'save the meeting',
    startPoint: 16,
    selected: null
  },
  {
    message: 'All set!',
    startPoint: 17,
    selected: null
  }
]

export const HOW_TO_JOIN_A_MEETING_NOTES = [
  {
    message: 'click on a meeting',
    startPoint: 1.3,
    selected: null
  },
  {
    message: 'click on hangouts meet link',
    startPoint: 4.2,
    selected: null
  },
  {
    message: 'click join meeting',
    startPoint: 9,
    selected: null
  },
  {
    message: 'all set!',
    startPoint: 12,
    selected: null
  }
]

export const getMeetingNotes = note => {
  switch(note) {
    case 'HOW_TO_START_A_MEETING_NOTES':
      return HOW_TO_START_A_MEETING_NOTES
    case 'HOW_TO_JOIN_A_MEETING_NOTES':
      return HOW_TO_JOIN_A_MEETING_NOTES
    default:
      return null
  }
}
