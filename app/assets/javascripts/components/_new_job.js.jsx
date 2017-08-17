var NewJob = React.createClass({
  handleClick() {
    var title = this.refs.title.value;
    var description = this.refs.description.value;
    if (title && description) {
      $.ajax({
        url: '/api/v1/jobs',
        type: 'POST',
        data: { job: {title: title, description: description, location: 'placeholder location', jobtype: 'Part-time'} },
        success: (job) => {
          this.props.handleSubmit(job);
        }
      });
    }
  },

  render() {
    return (
      <div>
        <p><input ref='title' placeholder='Enter job title' /></p>
        <p><input ref='description' placeholder='Enter job description' /></p>
        <p><button onClick={this.handleClick}>Submit</button></p>
      </div>
    )
  }
});