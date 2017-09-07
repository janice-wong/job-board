Job.all.destroy_all

cities = ['New York', 'San Francisco', 'Los Angeles', 'Boston']
jobtype = ['Full-time', 'Part-time']

10.times { Job.create!(
  title: Faker::Job.title,
  description: Faker::Hipster.paragraph(2),
  location: cities[rand(3)],
  jobtype: jobtype[rand(2)]
) }