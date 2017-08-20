var NewJob = React.createClass({
  getInitialState() {
    return { selectedOption: '' }
  },

  handleClick() {
    var title = this.refs.title.value;
    var description = this.refs.description.value;
    var jobtype = this.state.selectedOption
    if (title && description) {
      $.ajax({
        url: '/api/v1/jobs',
        type: 'POST',
        data: { job: {title: title, description: description, location: 'placeholder location', jobtype: jobtype} },
        success: (job) => {
          this.props.handleSubmit(job);
        }
      });
      this.refs.title.value="";
      this.refs.description.value="";
      this.state.selectedOption="";
    }
  },

  handleOptionChange(e) {
    this.setState({ selectedOption: e.target.value });
  },

  render() {
    return (
      <div>
        <p><input ref='title' placeholder='Enter job title' /></p>
        <p><input ref='description' placeholder='Enter job description' /></p>
        <form>
          <div>
            <label>
              <input type="radio" value="Full-time" 
                            checked={this.state.selectedOption === 'Full-time'} 
                            onChange={this.handleOptionChange} />
              Full-time
            </label>
          </div>
          <div>
            <label>
              <input type="radio" value="Part-time" 
                            checked={this.state.selectedOption === 'Part-time'} 
                            onChange={this.handleOptionChange} />
              Part-time
            </label>
          </div>
        </form>
        <p><button onClick={this.handleClick}>Submit</button></p>
      </div>
    )
  }
});