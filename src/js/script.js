'use strict'
const createCandidate = function (name, skills) {
  return {
    name,
    skills
  }
}
const requirements = []

const addRequirement = function (requirement) {
  requirements.push(requirement)
}
const conductInterview = function (candidate, requirements) {
  for (const requirement of requirements) {
    if (!candidate.skills.includes(requirement)) {
      return false
    }
  }
  return true
}
const scheduleInterviews = function (candidates, requirements, ratingFunction) {
  for (const candidate of candidates) {
    const meetsRequirements = conductInterview(candidate, requirements)
    const rating = ratingFunction(candidate)

    console.log(`Candidate: ${candidate.name}`)
    console.log(`Skills: ${candidate.skills.join(', ')}`)

    if (meetsRequirements) {
      console.log('Candidate meets all requirements.')
      console.log(`Rating: ${rating}`)
    } else {
      console.log('Candidate does not meet all requirements.')
    }

    console.log('---')
  }
}
const candidate1 = createCandidate('John', ['JavaScript', 'React', 'Node.js'])
const candidate2 = createCandidate('Mary', ['HTML', 'CSS', 'Python'])

addRequirement('React')
scheduleInterviews([candidate1, candidate2], requirements, candidate => Math.floor(Math.random() * 100))
