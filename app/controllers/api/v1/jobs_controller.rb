class Api::V1::JobsController < Api::V1::BaseController
  def index
    respond_with Job.all
  end

  def create
    respond_with :api, :v1, Job.create(job_params)
  end

  def update
    job = Job.find(params["id"])
    job.update_attributes(job_params)
    respond_with job, json: job
  end

  def destroy
    respond_with Job.destroy(params[:id])
  end

  private

  def job_params
    params.require(:job).permit(:id, :title, :description, :jobtype, :location)
  end
end
