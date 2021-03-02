interface FeaturePerformance {
  key: number
  value?: string
}

interface AssessmentList {
  selfAssessmentQuestion: Array<FeaturePerformance>
  questionManager: Array<FeaturePerformance>
}

interface reviewScheduleConfig {
  date: Date
}

interface assessmentScheduleConfig {
  assessment: AssessmentList
}
