export type CompetitionType = 'einzel' | 'doppel'

export interface Competition {
  id: string
  label: string
  type: CompetitionType
  /** Max teams for doppel, max players for einzel */
  maxParticipants: number
  /** tennis.de tournament detail URL */
  signupUrl: string
}

const TOURNAMENT_DATE = new Date('2026-07-05T00:00:00+02:00')
const SIGNUP_DEADLINE = new Date('2026-07-02T20:00:00+02:00')

export const venue = {
  organisation: 'TV Winsen/Luhe von 1913 e.V.',
  street: 'Luhdorfer Str. 47a',
  cityLine: '21423 Winsen (Luhe)',
  mapsUrl: 'https://maps.app.goo.gl/rndtuka3qNptRi2E7'
} as const

/** "Luhdorfer Str. 47a, 21423 Winsen (Luhe)" — single-line representation. */
export const venueAddress = `${venue.street}, ${venue.cityLine}`

export const contactEmail = 'matchday@tennisverein-winsen.de'

/** Vereinsanteil in EUR — Einzel pro Teilnehmer, Doppel pro Team. */
export const feeVerein = 30

/** DTB-Teilnehmerentgelt 2026 (Erwachsene), pro Person, in EUR. */
export const feeVerbandPerPerson = {
  einzel: 5,
  doppel: 3
} as const

/** Einmalige DTB-Lizenz pro Jahr, in EUR. */
export const dtbLicenseFee = 20

export const competitions: readonly Competition[] = [
  {
    id: 'herren-einzel',
    label: 'Herren Einzel',
    type: 'einzel',
    maxParticipants: 14,
    signupUrl: 'https://www.tennis.de/spielen/spielbetrieb/turniersuche.html#detail/830199'
  },
  {
    id: 'herren-doppel',
    label: 'Herren Doppel',
    type: 'doppel',
    maxParticipants: 8,
    signupUrl: 'https://www.tennis.de/spielen/spielbetrieb/turniersuche.html#detail/830199'
  },
  {
    id: 'herren-40-einzel',
    label: 'Herren 40 Einzel',
    type: 'einzel',
    maxParticipants: 14,
    signupUrl: 'https://www.tennis.de/spielen/spielbetrieb/turniersuche.html#detail/836579'
  }
] as const

const TZ = 'Europe/Berlin'

const fmtLongDate = new Intl.DateTimeFormat('de-DE', { day: 'numeric', month: 'long', year: 'numeric', timeZone: TZ })

const partsFmt = new Intl.DateTimeFormat('de-DE', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
  weekday: 'long',
  timeZone: TZ
})

const partsOf = (d: Date) => {
  const parts = partsFmt.formatToParts(d)
  const get = (type: Intl.DateTimeFormatPartTypes) => parts.find(p => p.type === type)?.value ?? ''
  return { day: get('day'), month: get('month'), year: get('year'), weekday: get('weekday') }
}

const tdParts = partsOf(TOURNAMENT_DATE)
const sdParts = partsOf(SIGNUP_DEADLINE)

export const tournamentDate = {
  date: TOURNAMENT_DATE,
  /** "Sonntag" */
  weekday: tdParts.weekday,
  /** "05.07." */
  short: `${tdParts.day}.${tdParts.month}.`,
  /** "2026" */
  year: tdParts.year,
  /** "05.07.2026" */
  numeric: `${tdParts.day}.${tdParts.month}.${tdParts.year}`,
  /** "5. Juli 2026" */
  long: fmtLongDate.format(TOURNAMENT_DATE)
}

export const signupDeadline = {
  date: SIGNUP_DEADLINE,
  /** "02.07." */
  short: `${sdParts.day}.${sdParts.month}.`,
  /** "02.07., 20 Uhr" */
  shortWithTime: `${sdParts.day}.${sdParts.month}., 20 Uhr`,
  /** "2. Juli 2026" */
  long: fmtLongDate.format(SIGNUP_DEADLINE),
  /** "2. Juli 2026, 20:00 Uhr" */
  longWithTime: `${fmtLongDate.format(SIGNUP_DEADLINE)}, 20:00 Uhr`
}

const totalEinzel = feeVerein + feeVerbandPerPerson.einzel
const verbandPerTeamDoppel = feeVerbandPerPerson.doppel * 2
const totalDoppelPerPerson = (feeVerein + verbandPerTeamDoppel) / 2

export const fees = {
  verein: feeVerein,
  verband: feeVerbandPerPerson,
  /** EUR — pro Teilnehmer Herren Einzel, inkl. Verband. */
  einzelTotal: totalEinzel,
  /** EUR — pro Person im Doppel, inkl. Verband. */
  doppelPerPerson: totalDoppelPerPerson,
  /** EUR — pro Team Verband-Anteil im Doppel (= 2 × Doppelentgelt). */
  doppelVerbandPerTeam: verbandPerTeamDoppel
} as const
