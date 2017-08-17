var AllJobs = React.createClass({
  handleDelete(id) {
    this.props.handleDelete(id);
  },

  onUpdate(job) {
    this.props.onUpdate(job);
  },

  render() {
    var jobs = this.props.jobs.map((job) => {
      return (
        <div key={job.id} className="Jobs">
          <Job job={job}
                handleDelete={this.handleDelete.bind(this, job.id)}
                handleUpdate={this.onUpdate} />
        </div>
      )
    });

    return (
      <div>
        {jobs}
      </div>
    )
  }
});