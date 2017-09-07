var Body = React.createClass({
  getInitialState() {
    return { jobs: [] }
  },

  componentDidMount() {
    $.getJSON('/api/v1/jobs.json', (response) => { this.setState({ jobs: response }) });
  },

  handleSubmit(job) {
    var newState = this.state.jobs.concat(job);
    this.setState({ jobs: newState });
  },

  handleDelete(id) {
    $.ajax({
      url: `/api/v1/jobs/${id}`,
      type: 'DELETE',
      success: () => {
        this.removeJobClient(id);
      }
    });
  },

  removeJobClient(id) {
    var newState = this.state.jobs.filter((job) => { return job.id != id });

    this.setState({ jobs: newState });
  },

  handleUpdate(job) {
    $.ajax({
      url: `/api/v1/jobs/${job.id}`,
      type: 'PUT',
      data: { job: job },
      success: () => {
        this.updateJobs(job);
      }
    });
  },

  updateJobs(job) {
    var newState = this.state.jobs.filter((i) => { return i.id != job.id });
    newState.push(job)

    this.setState({jobs: newState});
  },

  render() {
    return (
      <div>
        <NewJob handleSubmit={this.handleSubmit} />
        <AllJobs jobs={this.state.jobs} handleDelete={this.handleDelete} onUpdate={this.handleUpdate} />
      </div>
    )
  }
});