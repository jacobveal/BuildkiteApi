import { getBuildsList } from './api/builds-api';
import { listArtifactsForJob } from './api/artifacts-api';

const params = {
  branch: 'buildkite'
}

getBuildsList('prize-patrol-test', 'lambda-common', params)
  .then((builds) => {
    console.log(builds)
    builds[0].jobs.forEach((job) => {
      //console.log(job)
    })

    listArtifactsForJob(builds[0].jobs[6].artifacts_url)
    .then((artifacts) => {
      console.log(artifacts)
    })
  })
  .catch((error) => {
    console.log(error)
  })
