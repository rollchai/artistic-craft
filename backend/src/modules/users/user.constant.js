const USER_ROLES = Object.freeze({
  CUSTOMER: "customer",
  ARTIST: "artist",
  ADMIN: "admin",
});

const USER_STATUS = Object.freeze({
  ACTIVE: "active",
  INACTIVE: "inactive",
  SUSPENDED: "suspended",
});

module.exports = {
  USER_ROLES,
  USER_STATUS,
};
