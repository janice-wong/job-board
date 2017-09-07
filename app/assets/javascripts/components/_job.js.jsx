var Job = React.createClass({
  getInitialState() {
    return { editable: false, job: {} }
  },

  handleEdit() {
    if (this.state.editable) {
      var id = this.props.job.id;
      var title = this.state.job.title;
      var description = this.state.job.description;
      var location = this.state.job.location;
      var jobtype = this.refs.jobtype.value;
      var job = {id: id, title: title, description: description, location: location, jobtype: jobtype }
      this.props.handleUpdate(job);
    }
    this.setState({editable: !this.state.editable})
  },

  handleChange(propertyName, event) {
    const job = this.props.job;
    job[propertyName] = event.target.value;
    this.setState({ job: job });
  },

  render() {
    var title = this.state.editable ? <p>Title: <input onChange={this.handleChange.bind(this, 'title')} value={this.props.job.title} /></p> : <h3> {this.props.job.title}</h3>;
    var location = this.state.editable ? 
    <p>
      Location: 
      <select value={this.props.job.location} onChange={this.handleChange.bind(this, 'location')}>
        <option value="New York">New York</option>
        <option value="Los Angeles">Los Angeles</option>
        <option value="San Francisco">San Francisco</option>
        <option value="Boston">Boston</option>
      </select>
    </p> 
    : <p><strong>Location:</strong> {this.props.job.location}</p>;
    var jobtype = this.state.editable ? <p>Type: <input type='text' ref='jobtype' defaultValue={this.props.job.jobtype} /></p> : <p><strong>Type:</strong> {this.props.job.jobtype}</p>;
    var description = this.state.editable ? <p>Description: <textarea onChange={this.handleChange.bind(this, 'description')} value={this.props.job.description} ></textarea></p> : <p><i>{this.props.job.description}</i></p>;
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