module.exports = {
     hostname: process.argv[2] ||process.env.IP ||  '127.0.0.1',
     port : process.argv[3] || process.env.PORT || 3001
}