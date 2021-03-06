const { buildSchema } = require('graphql');

const schema = buildSchema(`
    type User {
        id: String!
        username: String!
        email: String!
        isConfirmed: Boolean!
        profileImg: String!
        twitterURL: String!
        GitHubURL: String!
        LinkedinURL: String!
        level: Int!
        exp: Int!
        likes: [Category]
        requiredExp: Int!
        completedTasks: Int!
        createdAt: String!
    }

    type Category {
      id: String!
      name: String!
      image: String!
      views: Int!
      likes: Int!
      isLiked: Boolean!
    }
    type Languages {
      python: String
      javascript: String
      c_cpp: String
      csharp: String
      java: String
    }
    type TaskData {
      languages: Languages
      content: String!
    }

    type AuthPayload {
      token: String!
      user: User!
    }

    type Task {
      id: String!
      categoryId: String!
      name: String!
      difficulty: String!
      solvedCount: Int!
      categoryName: String
      isSolved: Boolean!
      step: Int!
      data: TaskData
    }

    type TasksPayload {
      category: Category!
      tasks: [Task]
    }

    type Query {
      user(id: String!): User!
      me: User!
      getCategories: [Category]
      getLeaderboard: [User]
      getTasks(categoryId: String!): TasksPayload!
      getAllTasks: [Task]
      getAllUsers: [User]
      getTask(id: String!): Task!
    }
    type TestCase {
      Result: String
      Warnings: String
      Errors: String
      isSuccess: Boolean
    }
    type Mutation {
      registerUser(username: String!, password: String!, email: String!): AuthPayload!
      loginUser(email: String!, password: String!): AuthPayload!
      confirmUser(token: String!): User
      sendResetPasswordConfirmation(email: String!): Boolean!
      resetPassword(token: String!, newPassword: String!, type: Int!): Boolean!
      subscribeEmail(email: String!): Boolean!
      unsubscribeEmail(email: String!): Boolean!
      updateProfile(currentPassword: String!, newPassword: String!, LinkedinURL: String!, GitHubURL: String!, TwitterURL: String!, ProfileImg: String!, username: String!): User!
      likeCategory(categoryId: String!): Category!
      solveTask(id: String!, language: Int!, code: String!): [TestCase]
    }
`);

module.exports = schema;
