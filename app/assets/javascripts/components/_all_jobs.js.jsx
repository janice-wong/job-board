var AllJobs = React.createClass({
  handleDelete(id) {
    this.props.handleDelete(id);
  },

  onUpdate(job) {
    this.props.onUpdate(job);
  },

  render() {
    var sorted_jobs = this.props.jobs.sort(function (a, b) {
      return b.id - a.id;
    });

    var jobs = sorted_jobs.map((job) => {
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