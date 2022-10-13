class MenuwithreviewSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :price, :category, :description

  has_many :reviews
end
