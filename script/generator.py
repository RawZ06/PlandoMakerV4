import json
import itertools
import random

def read_settings(filename):
    with open(filename) as json_file:
        data = json.load(json_file)
        return data

def generate_sample(settings):
    res = [random.choice(setting["choices"]) for setting in settings]
    return {
        "average": sum(value["weight"] for value in res)/len(settings),
        "res": res
    }

def generate(settings, interval=None):
    result = [generate_sample(settings) for _ in range(1000)]

    if (not interval):
        return random.choice(result)

    right = list(filter(lambda a: a["average"] >= interval[0] and a["average"] <= interval[1], result))
    wrong = list(filter(lambda a: a["average"] < interval[0] or a["average"] > interval[1], result))

    if (not right):
        raise Exception("This list don't permit to choose a sample that verify the rule")

    if (random.randint(0, 99) == 0):
        return random.choice(wrong)
    else:
        return random.choice(right)

# settings = read_settings()

# print(generate(settings))








