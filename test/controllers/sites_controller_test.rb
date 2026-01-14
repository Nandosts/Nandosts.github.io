require "test_helper"

class SitesControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get site_url("1")
    assert_response :success
  end
end
