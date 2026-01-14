require "test_helper"

class SitesControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get site_path(id: Project.all.first.id)
    assert_response :success
  end
end
