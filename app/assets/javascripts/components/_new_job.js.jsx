var NewJob = React.createClass({
  getInitialState() {
    return { selectedOption: '', value: 'New York' }
  },

  handleClick() {
    var title = this.refs.title.value;
    var description = this.refs.description.value;
    var jobtype = this.state.selectedOption;
    var location = this.state.value;
    if (title && description && jobtype && location) {
      $.ajax({
        url: '/api/v1/jobs',
        type: 'POST',
        data: { job: {title: title, description: description, location: location, jobtype: jobtype} },
        success: (job) => {
          this.props.handleSubmit(job);
        }
      });
      this.refs.title.value='';
      this.refs.description.value='';
      this.state.selectedOption='';
      this.state.value='';
    }
  },

  handleOptionChange(e) {
    this.setState({ selectedOption: e.target.value });
  },

  handleChange(e) {
    this.setState({ value: e.target.value });
  },

  render() {
    return (
      <div>
        <form>
          <p><input ref='title' placeholder='Enter job title' /></p>
          <p><input ref='description' placeholder='Enter job description' /></p>
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
          <p>
            Location: 
            <select value={this.state.value} onChange={this.handleChange}>
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