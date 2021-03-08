interface FeaturePerformance {
  key: number
  value?: string
}

interface peopleList {
  name: string
  selected: boolean
}

interface peerAssessmentList {
  peerSelfAssessmentQuestion: Array<FeaturePerformance>
  questionEmployee: Array<FeaturePerformance>
}
interface AssessmentList {
  selfAssessmentQuestion: Array<FeaturePerformance>
  questionManager: Array<FeaturePerformance>
  peerAssessmentList: peerAssessmentList
}

interface reviewScheduleConfig {
  date: Date
}

interface assessmentScheduleConfig {
  assessment: AssessmentList
}

interface peopleConfig {
  peopleList: Array<peopleList>
}
