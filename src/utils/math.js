import {
  create,
  bignumberDependencies,
  addDependencies,
  subtractDependencies,
  multiplyDependencies,
  divideDependencies,
  formatDependencies,
} from 'mathjs'

const { bignumber, add, subtract, multiply, divide, format } = create({
  bignumberDependencies,
  addDependencies,
  subtractDependencies,
  multiplyDependencies,
  divideDependencies,
  formatDependencies,
})

export function mathAdd(a, b) {
  // format方法会把结果转成字符串,
  // 设置 notation: 'fixed'，返回的值不会转成科学计数法，确保返回的值是一个正常的字符串
  return format(add(bignumber(a), bignumber(b)), {
    notation: 'fixed',
  })
}

export function mathSubtract(a, b) {
  return format(subtract(bignumber(a), bignumber(b)), {
    notation: 'fixed',
  })
}

export function mathMultiply(a, b) {
  return format(multiply(bignumber(a), bignumber(b)), {
    notation: 'fixed',
  })
}

export function mathDivide(a, b) {
  return format(divide(bignumber(a), bignumber(b)), {
    notation: 'fixed',
  })
}
