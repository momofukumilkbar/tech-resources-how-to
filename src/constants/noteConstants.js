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

export const HOW_TO_CALL_IN_TO_A_MEETING_NOTES = [
  {
    message: 'click on a meeting',
    startPoint: 0,
    selected: null
  },
  {
    message: 'dial in using the phone number and pin on the metting info popup',
    startPoint: 3,
    selected: null
  }
]

export const HOW_TO_START_IN_CONFERENCE_ROOM_A_MEETING_NOTES = [
  {
    message: 'check that TV is on google hangouts meet',
    startPoint: 0,
    selected: null
  },
  {
    message: 'note: if you are not on google hangouts meet, you will need to change the HDMI input',
    startPoint: 0.5,
    selected: null
  },
  {
    message: 'all scheduled meetings are on the tablet, choose your meeting form the list',
    startPoint: 3,
    selected: null
  },
  {
    message: 'all set',
    startPoint: 6,
    selected: null
  }
]

export const getMeetingNotes = note => {
  debugger
  switch(note) {
    case 'HOW_TO_START_A_MEETING_NOTES':
      return HOW_TO_START_A_MEETING_NOTES
    case 'HOW_TO_JOIN_A_MEETING_NOTES':
      return HOW_TO_JOIN_A_MEETING_NOTES
    case 'HOW_TO_CALL_IN_TO_A_MEETING_NOTES':
      return HOW_TO_CALL_IN_TO_A_MEETING_NOTES
    case 'HOW_TO_START_IN_CONFERENCE_ROOM_A_MEETING_NOTES':
      return HOW_TO_START_IN_CONFERENCE_ROOM_A_MEETING_NOTES
    default:
      return null
  }
}
