var Job = React.createClass({
  getInitialState() {
    return {editable: false, jobtype: this.props.job.jobtype}
  },

  handleEdit() {
    if (this.state.editable) {
      var id = this.props.job.id;
      var title = this.refs.title.value;
      var description = this.refs.description.value;
      var location = this.refs.location.value;
      var jobtype = this.state.jobtype;
      var job = {id: id, title: title, description: description, location: location, jobtype: jobtype }
      this.props.handleUpdate(job);
    }
    this.setState({editable: !this.state.editable})
  },

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  },

  render() {
    var title = this.state.editable ? <p>Title: <input type='text' ref='title' defaultValue={this.props.job.title} /></p> : <h3> {this.props.job.title}</h3>;

    var location = this.state.editable ? 
      <p>Location:
        <select ref="location" defaultValue={this.props.job.location} >
          <option value="New York">New York</option>
          <option value="Los Angeles">Los Angeles</option>
          <option value="San Francisco">San Francisco</option>
          <option value="Boston">Boston</option>
        </select>
      </p> 
      : 
      <p><strong>Location:</strong> {this.props.job.location}</p>;

    var jobtype = this.state.editable ? 
      <p>Type:
          <br />
          <label>
            <input name="jobtype" ref="jobtype" type="radio" value="Full-time" 
                          checked={this.state.jobtype === 'Full-time'} 
                          onChange={this.handleChange} />
            Full-time
          </label>
          <br />
          <label>
            <input name="jobtype" ref="jobtype" type="radio" value="Part-time" 
                          checked={this.state.jobtype === 'Part-time'} 
                          onChange={this.handleChange} />
            Part-time
          </label>
      </p> 
      : 
      <p><strong>Type:</strong> {this.props.job.jobtype}</p>;

    var description = this.state.editable ? <p>Description: <textarea type='text' ref='description' defaultValue={this.props.job.description}></textarea></p> : <p><i>{this.props.job.description}</i></p>;

    return (
      <div>
        {title}
        {location}
        {jobtype}
        {description}
        <p><button onClick={this.handleEdit}> {this.state.editable ? 'Submit' : 'Edit'} </button></p>
        <p><button onClick={this.props.handleDelete}>Delete</button></p>
      </div>
    )
  }
});