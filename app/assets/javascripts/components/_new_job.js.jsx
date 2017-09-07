var NewJob = React.createClass({
  getInitialState() {
    return { title: '', description: '', jobType: '', location: 'New York' }
  },

  handleClick() {
    var title = this.state.title;
    var description = this.state.description;
    var jobType = this.state.jobType;
    var location = this.state.location;
    if (title && description && jobType && location) {
      $.ajax({
        url: '/api/v1/jobs',
        type: 'POST',
        data: { job: {title: title, description: description, jobtype: jobType, location: location} },
        success: (job) => {
          this.props.handleSubmit(job);
        }
      });
      this.state.title = '';
      this.state.description = '';
      this.state.jobType = '';
      this.state.location = '';
    }
  },

  handleInputChange(e) {
    this.setState({[e.target.name]: e.target.value});
  },

  render() {
    return (
      <div>
        <form>
          <p><input name="title" value={this.state.title} placeholder='Enter job title' onChange={this.handleInputChange} /></p>
          <p><textarea name='description' placeholder='Enter job description' onChange={this.handleInputChange}></textarea></p>
          <div>
            <label>
              <input name="jobType" type="radio" value="Full-time" 
                            checked={this.state.jobType === 'Full-time'} 
                            onChange={this.handleInputChange} />
              Full-time
            </label>
          </div>
          <div>
            <label>
              <input name="jobType" type="radio" value="Part-time" 
                            checked={this.state.jobType === 'Part-time'} 
                            onChange={this.handleInputChange} />
              Part-time
            </label>
          </div>
          <p>
            Location: 
            <select name="location" value={this.state.location} onChange={this.handleInputChange}>
              <option value="New York">New York</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="San Francisco">San Francisco</option>
              <option value="Boston">Boston</option>
            </select>
          </p>
        </form>
        <p><button onClick={this.handleClick}>Submit</button></p>
      </div>
    )
  }
});