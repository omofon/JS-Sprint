// QR Scan Records

const scans = [
  { id: 1, user: "John Doe", type: "text", data: "Hello", date: "2025-11-07" },
  {
    id: 2,
    user: "Jaden Smoer",
    type: "url",
    data: "https://example.com",
    date: "2024-01-23",
  },
  {
    id: 3,
    user: "Sandra Hunit",
    type: "email",
    data: "test@email.com",
    date: "2025-06-04",
  },
];

const ScanUtils = {
  byUser: (records, user) => records.filter((r) => r.user === user),
  countByTime: (records) =>
    records.reduce((acc, r) => {
      acc[r.type] = (acc[r.type] || 0) + 1;
      return acc;
    }, {}),
  lastest: (records) =>
    records.sort((a, b) => new Date(b.date) - new Date(a.date)),
}; // how do i test this?

class Scan {
  #id;
  constructor(id, user, type, data, date = new Date()) {
    this.#id = id;
    this.user = user;
    this.type = type;
    this.data = data;
    this.date = date;
  }

  get id() {
    return this.#id;
  }

  get summary() {
    return `${this.user} scanned a ${this.type}`;
  }

  static fromJSON(json) {
    return new Scan(json.id, json.user, json.type, json.data, json.date);
  }
}

class QRSession {
  constructor(user) {
    this.user = user;
    this.scans = [];
  }

  addScan(scan) {
    this.scans.push(scan);
  }

  get total() {
    return this.scans.length;
  }

  get recentScan() {
    return this.scans[this.scans.length - 1];
  }

  printSummary() {
    console.log(`${this.user} has ${this.total} scans`);
  }
}

class TextScan extends Scan {
  constructor(id, user, data) {
    super(id, user, "text", data);
  }
}

class URLScan extends Scan {
  constructor(id, user, data) {
    super(id, user, "url", data);
  }
}

QRSession.prototype[Symbol.iterator] = function () {
  let index = 0;
  const scans = this.scans;
  return {
    next() {
      return index < scans.length
        ? { value: scans[index++], done: false }
        : { done: true };
    },
  };
};

for (const scan of session) console.log(scan.summary);

class QRDatabase {
  constructor() {
    this.records = new Map();
  }

  add(session) {
    this.records.set(session.user, session);
  }

  getByUser(user) {
    return this.records.get(user);
  }

  *[Symbol.iterator]() {
    for (const [user, session] of this.records)
      yield { user, total: session.total };
  }
}

function summarizeActivity(db) {
  return [...db]
    .filter(({ total }) => total > 1)
    .map(({ user, total }) => `${user} has ${total} scans`);
}
