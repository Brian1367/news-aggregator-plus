class Article
  attr_reader :id, :title, :url, :description
  def initialize (id,title,url,description)
    @title = title
    @url = url
    @description = description
    @id = id
  end
end
