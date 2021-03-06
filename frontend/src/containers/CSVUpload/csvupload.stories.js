import { storiesOf } from "@storybook/react"
import * as actions from "actions"
import { createStoreAndStory } from "storybook-utils/withRouter"
import CSVUpload from "../CSVUpload"


storiesOf("Containers/CSVUpload")
  .add("CSVUpload - empty", () => {
    var { store, story } = createStoreAndStory({
      component: CSVUpload,
    })
    return story
  })

  .add("CSVUpload - file picked", () => {
    var { store, story } = createStoreAndStory({
      component: CSVUpload,
    })
    const mock_file = {
      name: 'BestFileEver.csv',
    }
    store.dispatch(actions.csvUpload.csvUploadPickFile(mock_file))
    return story
  })

  .add("CSVUpload - loading", () => {
    var { store, story } = createStoreAndStory({
      component: CSVUpload,
    })
    store.dispatch(actions.csvUpload.csvUploadLoadingStart())
    return story
  })

  .add("CSVUpload - error", () => {
    var { store, story } = createStoreAndStory({
      component: CSVUpload,
    })
    store.dispatch(actions.csvUpload.csvUploadError("Error!"))
    return story
  })
