class SitesController < ApplicationController
  def show
    @project = Project.find(params[:id])
    unless @project
      redirect_to root_path, alert: "Project not found"
    end
  end
end