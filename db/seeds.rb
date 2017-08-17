10.times { Job.create!(
  title: Faker::Job.title,
  description: Faker::Hipster.paragraph(2),
  location: Faker::Address.city,
  jobtype: 'Full-time'
) }